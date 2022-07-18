import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd }                       from '@angular/router';
import { plainToClass }                         from 'class-transformer';
import { combineLatest, map, Observable, Subscription }                                  from 'rxjs';
import { ApiConstants }                         from 'src/app/constants/ApiConstants';
import { GeneralConstants }                     from 'src/app/constants/GeneralConstants';
import { Species } from 'src/app/models/species/Species';
import { OwnedPokemon }                         from 'src/app/models/stats/OwnedPokemon';
import { OwnedPokemonDelta }                    from 'src/app/models/stats/OwnedPokemonDelta';
import { ModelDefinition, SelectAttributeDefinition }                      from 'zydeco-ts';
import { ResourceComponent }                    from '../v2/resource/resource.component';
import { OwnedPokemonModelDefinitionBuilder }   from './OwnedPokemonModelDefinitionBuilder';

@Component({
  selector: 'urpg-owned-pokemon',
  templateUrl: '../v2/resource/resource.component.html'
})
export class OwnedPokemonComponent extends ResourceComponent<OwnedPokemon, OwnedPokemonDelta> implements OnDestroy, OnInit {

  speciesSubscription:Subscription;

  constructor(
    protected route:ActivatedRoute,
    protected cdr:ChangeDetectorRef
  ) { 
    super(OwnedPokemon, OwnedPokemonDelta, route);
    this.title = "Owned Pokemon";
    this.api = ApiConstants.OWNED_POKEMON_API;
  }

  override ngOnInit() {
    // If the "owner" query param is provided, load the owner's pokemon
    // else use the dbid, if provided
    var obsComb = combineLatest([this.route.params, this.route.queryParams], (params, qparams) => ({ params, qparams }));
    
    obsComb.subscribe( ap => {
      console.log(ap.params['type']);
      console.log(ap.qparams['page']);
    });
    this.route.queryParams.subscribe(params => {
      
    });

    this.route.params.subscribe(params => {
      if (params['dbid']) {
        this.load(params['dbid']);
      }
    });
  }

  ngOnDestroy(): void {
    if (!this.speciesSubscription == null) {
      this.speciesSubscription.unsubscribe();
    }
  }

  override load(param:any, refresh:boolean = false) {
    this.itemInContext = true;
    this.editType = "update";
    this.delta    = new this.deltaType();
    this.service.get(this.api, param).subscribe(model => {
      this.model = plainToClass(this.modelType, model);
      this.createModelDefinition();
      this.loadSpecies(this.model.species.name);
    });
  }

  override create(refresh:boolean = false) {
    this.delta = null;
    super.create(false);
    this.createModelDefinition();
  }

  createModelDefinition() {
    this.modelDefinition = new ModelDefinition(OwnedPokemonModelDefinitionBuilder.buildFirstPart(
      this.service.get(ApiConstants.CONTEST_ATTR_API),
      this.service.get(ApiConstants.CONTEST_RANK_API),
      this.service.get(ApiConstants.CONTEST_TYPE_API),
      this.service.get(ApiConstants.MEMBER_API, null, [ {key: "bot", value: "false"} ]),
      this.service.get(ApiConstants.NATURE_API),
      this.service.get(ApiConstants.OBTAINED_API),
      this.service.get(ApiConstants.SPECIES_API, null, [ {key: "ownable", value: "true"} ]),
      this.service.get(ApiConstants.TYPE_API)));
  }

  override loadItems() {

  }

  override onChange(attribute:string) {
    if (attribute == "Species" && this.delta.species != null) {
      this.modelDefinition.removeAttribute(GeneralConstants.OWNED_EXTRA_MOVES_TITLE);
      this.modelDefinition.removeAttribute(GeneralConstants.OWNED_HIDDEN_ABILITIES_TITLE);
      this.delta.ownedExtraMoves.length = 0;
      this.delta.ownedHiddenAbilities.length = 0;
      this.loadSpecies(this.delta.species);
    }
  }

  loadSpecies(name:string) {
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
