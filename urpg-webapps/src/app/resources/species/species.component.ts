import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpeciesService } from 'src/app/services/species/species.service';
import { plainToClass } from 'class-transformer';
import { Species } from 'src/app/models/species/Species';
import { ActivatedRoute } from '@angular/router';
import { SpeciesDelta } from 'src/app/models/species/SpeciesDelta';
import { MessageComponent } from '../message/message.component';
import { TypeService } from 'src/app/services/species/type.service';
import { StoryRankService } from 'src/app/services/creative/story-rank.service';
import { ArtRankService } from 'src/app/services/creative/art-rank.service';
import { ParkRankService } from 'src/app/services/creative/park-rank.service';
import { ParkLocationService } from 'src/app/services/creative/park-location.service';
import { AccordionPropertyKeyBuilder } from 'src/app/models/AccordionPropertyKey';
import { AccordionPropertyFieldBuilder } from 'src/app/models/AccordionPropertyField';
import { AccordionPropertyMapBuilder } from 'src/app/models/AccordionPropertyMap';
import { SpeciesAttackDelta } from 'src/app/models/species/SpeciesAttackDelta';
import { AttackService } from 'src/app/services/attack/attack.service';
import { SpeciesAbilityDelta } from 'src/app/models/species/SpeciesAbilityDelta';
import { AbilityService } from 'src/app/services/ability/ability.service';
import { CosmeticFormDelta } from 'src/app/models/species/CosmeticFormDelta';

@Component({
  selector: 'resources-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  names = [];
  model:Species = undefined;
  delta = new SpeciesDelta();
  editType = "update";
  types=[];
  storyRanks=[];
  artRanks=[];
  parkRanks=[];
  parkLocations=[];
  attackNames=[];
  attackMethods = [ "LEVEL-UP", "TM", "HM", "BREEDING", "MOVE TUTOR", "SPECIAL" ];
  abilityNames=[];
  speciesAttackKeys = [
    new AccordionPropertyKeyBuilder()
      .withLabel("Attack")
      .withType("select")
      .withAllowedValues(this.attackNames)
      .withFilterable(true)
      .withPrototypeSelector("attack.name")
      .withDeltaSelector("name")
      .build()
  ];
  speciesAttackFields=[
    new AccordionPropertyFieldBuilder()
      .withLabel("Method")
      .withName("method")
      .withType("select")
      .withRequired(true)
      .withSelectList(this.attackMethods)
      .build(),
    new AccordionPropertyFieldBuilder()
      .withLabel("Generation")
      .withName("generation")
      .withType("number")
      .withMin(1)
      .withMax(99)
      .build()
  ];
  speciesAttackPropertyDefinition = 
    new AccordionPropertyMapBuilder()
      .withKeyDefinitions(this.speciesAttackKeys)
      .withFieldDefinitions(this.speciesAttackFields)
      .withObjectClass(SpeciesAttackDelta)
      .build();
  
  speciesAbilityKeys = [
    new AccordionPropertyKeyBuilder()
      .withLabel("Ability")
      .withType("select")
      .withAllowedValues(this.abilityNames)
      .withFilterable(true)
      .withPrototypeSelector("ability.name")
      .withDeltaSelector("name")
      .build()
  ];
  speciesAbilityFields=[
    new AccordionPropertyFieldBuilder()
      .withLabel("Hidden?")
      .withName("hidden")
      .withType("boolean")
      .withRequired(true)
      .build()
  ];
  speciesAbilityPropertyDefinition = 
    new AccordionPropertyMapBuilder()
      .withKeyDefinitions(this.speciesAbilityKeys)
      .withFieldDefinitions(this.speciesAbilityFields)
      .withObjectClass(SpeciesAbilityDelta)
      .build();
  cosmeticFormKeys=[
    new AccordionPropertyKeyBuilder()
      .withLabel("Name")
      .withType("text")
      .withMinLength(3)
      .withMaxLength(20)
      .withFilterable(true)
      .withPrototypeSelector("name")
      .withDeltaSelector("name")
      .build()
  ];
  cosmeticFormFields=[
    new AccordionPropertyFieldBuilder()
      .withLabel("Form Name")
      .withName("formName")
      .withType("text")
      .withMinLength(3)
      .withMaxLength(20)
      .build()
  ];
  cosmeticFormPropertyDefinition = 
    new AccordionPropertyMapBuilder() 
      .withKeyDefinitions(this.cosmeticFormKeys)
      .withFieldDefinitions(this.cosmeticFormFields)
      .withObjectClass(CosmeticFormDelta)
      .build();

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private abilityService : AbilityService,
    private attackService : AttackService,
    private typeService : TypeService,
    private storyRankService : StoryRankService,
    private artRankService : ArtRankService,
    private parkRankService : ParkRankService,
    private parkLocationService : ParkLocationService,
    private service : SpeciesService
  ) { }

  ngOnInit() {
    this.loadNames();
    this.abilityService.findAllNames().subscribe(abilityNames => this.abilityNames.push(...abilityNames));
    this.attackService.findAllNames().subscribe(attackNames => this.attackNames.push(...attackNames));
    this.typeService.findAllNames().subscribe(types => this.types = types);
    this.storyRankService.findAllNames().subscribe(storyRanks => this.storyRanks = storyRanks);
    this.artRankService.findAllNames().subscribe(artRanks => this.artRanks = artRanks);
    this.parkRankService.findAllNames().subscribe(parkRanks => this.parkRanks = parkRanks);
    this.parkLocationService.findAllNames().subscribe(parkLocations => this.parkLocations = parkLocations);
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
  }

  loadNames() {
    this.service.findAllNames().subscribe(names => this.names = names);
  }

  initializePage(model:any) {
    console.log(model);
    this.model = model;
    this.delta = new SpeciesDelta();
    this.speciesAttackPropertyDefinition.deltas = this.delta.attacks;
    this.speciesAttackPropertyDefinition.setPrototypes(this.model.attacks);
    this.speciesAbilityPropertyDefinition.deltas = this.delta.abilities;
    this.speciesAbilityPropertyDefinition.setPrototypes(this.model.abilities);
    this.cosmeticFormPropertyDefinition.deltas = this.delta.cosmeticForms;
    this.cosmeticFormPropertyDefinition.setPrototypes(this.model.cosmeticForms);
  }

  create() {
    this.editType = "create";
    this.initializePage(new Species());
  }

  findByName(name) {
    this.editType = "update";
    this.service.findByName(name).subscribe(model => {
      this.initializePage(plainToClass(Species, model));
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.service.update(this.model.dbid, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error));
    }
    else if (this.editType == "create") {
      this.service.create(this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(model) {
    this.loadNames();
    this.messageBox.clear();
    this.messageBox.showSuccess(`Species ${this.editType}d successfully!`);
    this.editType = "update";
    this.initializePage(plainToClass(Species, model));
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Species could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Species could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
