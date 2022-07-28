import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { map, Observable, Subscription, tap } from 'rxjs';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { GeneralConstants } from 'src/app/constants/GeneralConstants';
import { Species } from 'src/app/models/v1/species/Species';
import { OwnedPokemon } from 'src/app/models/v1/stats/OwnedPokemon';
import { OwnedPokemonDelta } from 'src/app/models/v1/stats/OwnedPokemonDelta';
import { ResourceComponent } from 'src/app/resources/v1/lib/resource/resource.component';
import { CollapsibleMessageComponent } from 'src/app/shared/collapsible-message/collapsible-message.component';
import { environment } from 'src/environments/environment';
import { ModelDefinition, SelectAttributeDefinition } from 'zydeco-ts';
import { PokemonEditPaneModelDefinitionBuilder } from './PokemonEditPaneModelDefinitionBuilder';

@Component({
  selector: 'stats-pokemon-edit-pane',
  templateUrl: './pokemon-edit-pane.component.html',
  styleUrls: ['./pokemon-edit-pane.component.css']
})
export class PokemonEditPaneComponent extends ResourceComponent<OwnedPokemon, OwnedPokemonDelta> implements OnDestroy, OnInit {

  @Input() trainer! :string;
  @Input() pokemon! :OwnedPokemon;

  @Output() exit = new EventEmitter();

  private speciesSubscription :Subscription;
          members             :String[]       = [];
          ownerFilter         :string         = undefined;
          modelBase           :string         = environment.modelBase;
          species             :Species        = null;


  @ViewChild('message', {static: false})
  message!: CollapsibleMessageComponent;

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(OwnedPokemon, OwnedPokemonDelta, route);
    this.title = "Owned Pokemon";
    this.api = ApiConstants.OWNED_POKEMON_API;
  }

  override ngOnInit() {
    this.loaded = true;
    this.itemInContext = true;
    this.editType = this.pokemon ? "update" : "create";
    this.model = this.pokemon ? plainToClass(OwnedPokemon, this.pokemon) : new OwnedPokemon();
    this.delta = new this.deltaType();
    this.delta.trainer = this.pokemon ? null : this.trainer;
    this.createModelDefinition();
    if (this.pokemon) {
      this.loadSpecies(this.model.species.name);
    }
  }

  ngOnDestroy(): void {
    if (!this.speciesSubscription == null) {
      this.speciesSubscription.unsubscribe();
    }
  }

  override loadItems() {

  }

  override save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.service.put(this.api, this.model.getId(), this.delta).subscribe({
        next: model => {
          this.model = plainToClass(OwnedPokemon, model);
          this.doExit(this.model);
        },
        error: error => this.showErrorMessage(error)
      });
    }
    else if (this.editType == "create") {
      this.service.post(this.api, [], this.delta).subscribe({
        next: model => {
          this.model = plainToClass(OwnedPokemon, model);
          this.doExit(this.model);
        },
        error: error => this.showErrorMessage(error)
      });
    }
  }

  createModelDefinition() {
    this.modelDefinition = new ModelDefinition(PokemonEditPaneModelDefinitionBuilder.buildFirstPart(
      this.service.get(ApiConstants.CONTEST_ATTR_API),
      this.service.get(ApiConstants.CONTEST_RANK_API),
      this.service.get(ApiConstants.CONTEST_TYPE_API),
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
    this.modelDefinition.attributes.push(...PokemonEditPaneModelDefinitionBuilder.buildSecondPart(
      name,
      speciesObservable
        .pipe
        (
          tap
          (
            species => {
              this.species = plainToClass(Species, species);
            }
          ),
          map
          (
            species => 
              species.abilities
                .filter(ability => ability.hidden)
                .map(ability => ability.ability.name)
          )
        ),
      name != "Smeargle" ?
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
        :
        this.service.get(ApiConstants.ATTACK_API)
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

  doExit(pokemon:OwnedPokemon) {
    if (this.editType == "create") {
      this.exit.emit(pokemon);
    }
    else {
      this.exit.emit(this.model);
    }
  }

  getModelPath(pokemon: OwnedPokemon | OwnedPokemonDelta) {
    if (pokemon instanceof OwnedPokemon) {
      return `${this.modelBase}${this.pokemon.species.dexno}${this.pokemon.species.getSuffix()}.gif`;
    }
    else {
      return `${this.modelBase}${this.species.dexno}${this.species.getSuffix()}.gif`;
    }
  }

  override showErrorMessage(error:any) {
    this.message.clear();
    if (error.error == null) {
      if (error.status == 401) {
        this.message.showError(`Pokemon could not be ${this.editType}d. Error: The current user is not logged in or does not have permission to perform the requested action.`);
      }
      else {
        this.message.showError(`Pokemon could not be ${this.editType}d. Error: ${error.status} ${error.statusText}`);
      }
    }
    else if (error.error.errors !== undefined) {
      let messages = error.error.errors.map((message:any) => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.message.showErrorArray(`Pokemon could not be ${this.editType}d.`, messages);
    }
    else {
      this.message.showError(`Pokemon could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }
}
