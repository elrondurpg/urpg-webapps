import { Component, OnDestroy, OnInit }                 from '@angular/core';
import { ActivatedRoute }                               from '@angular/router';
import { plainToClass }                                 from 'class-transformer';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { ApiConstants }                                 from 'src/app/constants/ApiConstants';
import { GeneralConstants }                             from 'src/app/constants/GeneralConstants';
import { Species }                                      from 'src/app/models/v1/species/Species';
import { OwnedPokemon }                                 from 'src/app/models/v1/stats/OwnedPokemon';
import { OwnedPokemonDelta }                            from 'src/app/models/v1/stats/OwnedPokemonDelta';
import { ModelDefinition, SelectAttributeDefinition }   from 'zydeco-ts';
import { ResourceComponent }                            from '../../lib/resource/resource.component';
import { OwnedPokemonModelDefinitionBuilder }           from './OwnedPokemonModelDefinitionBuilder';

@Component({
  selector: 'urpg-owned-pokemon',
  templateUrl: './owned-pokemon.component.html'
})
export class OwnedPokemonComponent extends ResourceComponent<OwnedPokemon, OwnedPokemonDelta> implements OnDestroy, OnInit {

  private ownerName           :string = null;
  private speciesSubscription :Subscription;
          members             :String[] = [];
          ownerFilter         :string = undefined;

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(OwnedPokemon, OwnedPokemonDelta, route);
    this.title = "Owned Pokemon";
    this.api = ApiConstants.OWNED_POKEMON_API;
    this.complex = true;
  }

  override ngOnInit() {
    var obsComb = combineLatest([this.route.params, this.route.queryParams], (pathParameters, queryParameters) => ({ pathParameters, queryParameters }));
    
    obsComb.subscribe( routeParams => {
      if (routeParams) {
        if (routeParams.queryParameters && (this.ownerName = routeParams.queryParameters['owner']) != null) {
          this.loadItems();
        }
        if (routeParams.pathParameters && routeParams.pathParameters['dbid']) {
          this.load(routeParams.pathParameters['dbid']);
        }
      }
    });

    this.loadMembers();
  }

  ngOnDestroy(): void {
    if (!this.speciesSubscription == null) {
      this.speciesSubscription.unsubscribe();
    }
  }

  override loadItems() {
    if (this.ownerFilter != undefined) {
      this.ownerName = this.ownerFilter;
      this.ownerFilter = undefined;
    }

    if (this.ownerName != null) {
      this.service.get(this.api, null, [{ key: "owner", value: this.ownerName }]).subscribe((items : OwnedPokemon[]) => {
        this.items = plainToClass(OwnedPokemon, items);
      });
    }
  }

  loadMembers() {
    this.service.get(ApiConstants.MEMBER_API, null, [ {key: "bot", value: "false"} ]).subscribe(members => {
      this.members = members;
      console.log(this.members);
    });
  }

  override load(param:any, refresh:boolean = false) {
    this.itemInContext = true;
    this.editType = "update";
    this.delta    = new this.deltaType();
    this.service.get(this.api, param).subscribe(model => {
      this.model = plainToClass(this.modelType, model);
      console.log(this.model);
      this.createModelDefinition();
      this.loadSpecies(this.model.species.name);
    });
  }

  override create(refresh:boolean = false) {
    super.create(false);
    this.createModelDefinition();
    if (this.ownerName != null) {
      this.delta.trainer = this.ownerName;
    }
  }

  createModelDefinition() {
    this.modelDefinition = new ModelDefinition(OwnedPokemonModelDefinitionBuilder.buildFirstPart(
      this.service.get(ApiConstants.CONTEST_ATTR_API),
      this.service.get(ApiConstants.CONTEST_RANK_API),
      this.service.get(ApiConstants.CONTEST_TYPE_API),
      this.service.get(ApiConstants.MEMBER_API, null, [ {key: "bot", value: "false"} ]),
      this.service.get(ApiConstants.NATURE_API),
      this.service.get(ApiConstants.CAPTURE_METHOD_API),
      this.service.get(ApiConstants.SPECIES_API, null, [ {key: "ownable", value: "true"} ]),
      this.service.get(ApiConstants.TYPE_API)));
  }

  override onChange(attribute:string) {
    if (attribute == "Species" && this.delta.species != null) {
      this.loadSpecies(this.delta.species);
    }
  }

  loadSpecies(name:string) {
    this.modelDefinition.removeAttribute(GeneralConstants.OWNED_EXTRA_MOVES_TITLE);
    this.modelDefinition.removeAttribute(GeneralConstants.OWNED_HIDDEN_ABILITIES_TITLE);
    this.delta.ownedExtraMoves.length = 0;
    this.delta.ownedHiddenAbilities.length = 0;
    let speciesObservable = this.service.get(ApiConstants.SPECIES_API, name);
    this.modelDefinition.attributes.push(...OwnedPokemonModelDefinitionBuilder.buildSecondPart(
      speciesObservable
        .pipe
        (
          map
          (
            species => 
              species.abilities
                .filter(ability => ability.hidden)
                .map(ability => ability.ability.name)
          )
        ),
      speciesObservable
        .pipe
        (
          map
          (
            species => 
              species.attacks
                .filter(attack => attack.method != GeneralConstants.LEVEL_UP_ATTACK_METHOD)
                .map(attack => attack.attack.name)
          )
        )
    ));
    this.resetAvailableGenders(speciesObservable);
  }

  resetAvailableGenders(speciesObservable:Observable<any>) {
    this.speciesSubscription = speciesObservable.subscribe(raw => {
      let species = plainToClass(Species, raw);
      if (species.maleAllowed && !species.femaleAllowed) {
        this.delta.gender = "M";
        (this.modelDefinition.getAttribute(GeneralConstants.GENDER_ATTRIBUTE_TITLE) as SelectAttributeDefinition).disallowedItems = [ "F", "G" ];
      }
      else if (species.femaleAllowed && !species.maleAllowed) {
        this.delta.gender = "F";
        (this.modelDefinition.getAttribute(GeneralConstants.GENDER_ATTRIBUTE_TITLE) as SelectAttributeDefinition).disallowedItems = [ "M", "G" ];
      }
      else if (!species.femaleAllowed && !species.maleAllowed) {
        this.delta.gender = "G";
        (this.modelDefinition.getAttribute(GeneralConstants.GENDER_ATTRIBUTE_TITLE) as SelectAttributeDefinition).disallowedItems = [ "F", "M" ];
      }
      else {
        if (this.delta.gender == "G") this.delta.gender = null;
        (this.modelDefinition.getAttribute(GeneralConstants.GENDER_ATTRIBUTE_TITLE) as SelectAttributeDefinition).disallowedItems = [ "G" ];
      }
    });
  }
}
