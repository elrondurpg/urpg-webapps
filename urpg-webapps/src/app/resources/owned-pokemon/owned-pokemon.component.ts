import { ChangeDetectorRef, Component, OnInit }                  from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { plainToClass }                       from 'class-transformer';
import { map }                                from 'rxjs';
import { ApiConstants }                       from 'src/app/constants/ApiConstants';
import { GeneralConstants }                   from 'src/app/constants/GeneralConstants';
import { OwnedPokemon }                       from 'src/app/models/stats/OwnedPokemon';
import { OwnedPokemonDelta }                  from 'src/app/models/stats/OwnedPokemonDelta';
import { ModelDefinition }                    from 'zydeco-ts';
import { ResourceComponent }                  from '../v2/resource/resource.component';
import { OwnedPokemonModelDefinitionBuilder } from './OwnedPokemonModelDefinitionBuilder';

@Component({
  selector: 'urpg-owned-pokemon',
  templateUrl: '../v2/resource/resource.component.html'
})
export class OwnedPokemonComponent extends ResourceComponent<OwnedPokemon, OwnedPokemonDelta> implements OnInit {

  private speciesLoaded = false;

  constructor(
    protected route:ActivatedRoute,
    protected cdr:ChangeDetectorRef
  ) { 
    super(OwnedPokemon, OwnedPokemonDelta, route);
    this.title = "Owned Pokemon";
    this.api = ApiConstants.OWNED_POKEMON_API;
  }

  override ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['dbid']) {
        this.load(params['dbid']);
      }
    });
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
    this.speciesLoaded = false;
  }

  override loadItems() {

  }

  loadSpecies(name:string) {
    this.speciesLoaded = true;
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
  }

  override onChange(attribute:string) {
    if (attribute == "Species" && !this.speciesLoaded && this.delta.species != null) {
      this.loadSpecies(this.delta.species);
    }
  }
}
