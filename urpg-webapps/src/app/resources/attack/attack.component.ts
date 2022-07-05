import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AttackService } from 'src/app/services/attack/attack.service';
import { plainToClass } from 'class-transformer';
import { Attack } from 'src/app/models/attack/Attack';
import { ActivatedRoute } from '@angular/router';
import { AttackDelta } from 'src/app/models/attack/AttackDelta';
import { ContestComboDelta } from 'src/app/models/contest/ContestComboDelta';
import { MessageComponent } from '../message/message.component';
import { TypeService } from 'src/app/services/species/type.service';
import { AttackCategoryService } from 'src/app/services/attack/attack-category.service';
import { AttackTargetTypeService } from 'src/app/services/attack/attack-target-type.service';
import { ContestAttributeService } from 'src/app/services/contest/contest-attribute.service';
import { RseContestMoveTypeService } from 'src/app/services/contest/rse-contest-move-type.service';
import { OrasContestMoveTypeService } from 'src/app/services/contest/oras-contest-move-type.service';
import { AccordionPropertyFieldBuilder } from 'src/app/models/AccordionPropertyField';
import { AccordionPropertyKeyBuilder } from 'src/app/models/AccordionPropertyKey';
import { AccordionPropertyMap, AccordionPropertyMapBuilder } from 'src/app/models/AccordionPropertyMap';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'resources-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css']
})
export class AttackComponent implements OnInit {

  attackNames = [];
  attack:Attack = undefined;
  delta = new AttackDelta();
  editType = "update";
  types=[];
  attackCategories=[];
  attackTargetTypes=[];
  tms=[];
  contestAttributes=[];
  rseContestMoveTypes=[];
  orasContestMoveTypes=[];
  contestFormats = [ "RSE", "ORAS" ];
  contestComboKeys = [
    new AccordionPropertyKeyBuilder()
      .withTitle("Second Attack")
      .withType("select")
      .withAllowedValues(this.attackNames)
      .withFilterable(true)
      .withModelSelector("secondAttack.name")
      .withDeltaSelector("secondAttack")
      .build(),
    new AccordionPropertyKeyBuilder()
      .withTitle("Format")
      .withType("select")
      .withAllowedValues(this.contestFormats)
      .withFilterable(true)
      .withModelSelector("contestType")
      .withDeltaSelector("contestType")
      .build()
  ];
  contestComboFields=[
    new AccordionPropertyFieldBuilder()
      .withTitle("Overpowered")
      .withName("overpowered")
      .withType("boolean")
      .withDefaultValue(false)
      .withRequired(true)
      .build()
  ];
  contestComboPropertyDefinition = 
    new AccordionPropertyMapBuilder()
      .withKeyDefinitions(this.contestComboKeys)
      .withFieldDefinitions(this.contestComboFields)
      .withObjectClass(ContestComboDelta)
      .build();

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private attackService : AttackService,
    private typeService : TypeService,
    private attackCategoryService : AttackCategoryService,
    private attackTargetTypeService : AttackTargetTypeService,
    private contestAttributeService : ContestAttributeService,
    private rseContestMoveTypeService : RseContestMoveTypeService,
    private orasContestMoveTypeService : OrasContestMoveTypeService,
    private itemService : ItemService
  ) { }

  ngOnInit() {
    this.loadNames();
    this.typeService.findAllNames().subscribe(types => this.types = types);
    this.attackCategoryService.findAllNames().subscribe(attackCategories => this.attackCategories = attackCategories);
    this.attackTargetTypeService.findAllNames().subscribe(attackTargetTypes => this.attackTargetTypes = attackTargetTypes);
    this.contestAttributeService.findAllNames().subscribe(contestAttributes => this.contestAttributes = contestAttributes);
    this.rseContestMoveTypeService.findAllNames().subscribe(rseContestMoveTypes => this.rseContestMoveTypes = rseContestMoveTypes);
    this.orasContestMoveTypeService.findAllNames().subscribe(orasContestMoveTypes => this.orasContestMoveTypes = orasContestMoveTypes);
    this.itemService.findByTypeIn("TM","HM").subscribe(tms => this.tms = tms.map(tm => tm.name));

    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
  }

  loadNames() {
    this.attackService.findAllNames().subscribe(attacks => {
      this.attackNames.push(...attacks);
    });
  }

  create() {
    this.editType = "create";
    this.attack = new Attack();
    this.delta = new AttackDelta();
    this.contestComboPropertyDefinition.deltas = this.delta.contestCombos;
    this.contestComboPropertyDefinition.setPrototypes(this.attack.contestCombos);
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new AttackDelta();
    this.attackService.findByName(name).subscribe(attack => {
      this.attack = plainToClass(Attack, attack);
      this.contestComboPropertyDefinition.deltas = this.delta.contestCombos;
      this.contestComboPropertyDefinition.setPrototypes(this.attack.contestCombos);
      console.log(this.attack);
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.attackService.update(this.attack.dbid, this.delta).subscribe(
        attack => {
          this.showSuccessMessage(attack)
        },
        error => this.showErrorMessage(error));
    }
    else if (this.editType == "create") {
      this.attackService.create(this.delta).subscribe(
        attack =>
          this.showSuccessMessage(attack),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(attack) {
    this.loadNames();
    this.messageBox.clear();
    this.messageBox.showSuccess(`Attack ${this.editType}d successfully!`);
    this.editType = "update";
    this.attack = plainToClass(Attack, attack);
    this.delta = new AttackDelta();
    this.contestComboPropertyDefinition.deltas = this.delta.contestCombos;
    this.contestComboPropertyDefinition.setPrototypes(this.attack.contestCombos);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Attack could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Attack could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
