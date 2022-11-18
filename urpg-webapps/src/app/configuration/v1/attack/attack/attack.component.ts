import { Component, OnInit } from '@angular/core';
import { Attack } from 'src/app/models/v1/attack/Attack';
import { ActivatedRoute } from '@angular/router';
import { AttackDelta } from 'src/app/models/v1/attack/AttackDelta';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, ModelDefinition, NestedAttributeDefinitionBuilder, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ContestCombo } from 'src/app/models/v1/contest/ContestCombo';
import { ContestComboDelta } from 'src/app/models/v1/contest/ContestComboDelta';

@Component({
  selector: 'configuration-attack',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class AttackComponent extends ConfigurationComponent<Attack, AttackDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Attack, AttackDelta, route);
    this.title = "Attack";
    this.api = ApiConstants.ATTACK_API;
  }
  
  userLoaded(): void {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(17)
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Type")
        .withModelSelector("type.name")
        .withItemsFromObservable(this.service.get(ApiConstants.TYPE_API))
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Description")
        .withMinLength(3)
        .withMaxLength(100)
        .build(),
      new NumberAttributeDefinitionBuilder()
        .withTitle("Power")
        .withMinValue(0)
        .withMaxValue(500)
        .withRequired(true)
        .build(),
      new NumberAttributeDefinitionBuilder()
        .withTitle("Accuracy")
        .withMinValue(0)
        .withMaxValue(100)
        .withRequired(true)
        .build(),
      new NumberAttributeDefinitionBuilder()
        .withTitle("PP")
        .withModelSelector("pp")
        .withDeltaSelector("pp")
        .withMinValue(0)
        .withMaxValue(500)
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Damage Type")
        .withModelSelector("category.name")
        .withDeltaSelector("category")
        .withItemsFromObservable(this.service.get(ApiConstants.ATTACK_CATEGORY_API))
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Targeting Strategy")
        .withModelSelector("target.name")
        .withDeltaSelector("target")
        .withItemsFromObservable(this.service.get(ApiConstants.ATTACK_TARGET_TYPE_API))
        .withRequired(true)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Makes contact?")
        .withModelSelector("contact")
        .withDeltaSelector("contact")
        .withRequired(true)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Affected by Snatch?")
        .withModelSelector("snatch")
        .withDeltaSelector("snatch")
        .withRequired(true)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Affected by Substitute?")
        .withModelSelector("substitute")
        .withDeltaSelector("substitute")
        .withRequired(true)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Affected by Sheer Force?")
        .withModelSelector("sheerForce")
        .withDeltaSelector("sheerForce")
        .withRequired(true)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Affected by Magic Coat?")
        .withModelSelector("magicCoat")
        .withDeltaSelector("magicCoat")
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("RSE Contest Move Type")
        .withModelSelector("rseContestMoveType.name")
        .withDeltaSelector("rseContestMoveType")
        .withItemsFromObservable(this.configureNameObservableForApi(ApiConstants.RSE_CONTEST_MOVE_TYPE_API))
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("RSE Contest Attribute")
        .withModelSelector("rseContestAttribute.name")
        .withDeltaSelector("rseContestAttribute")
        .withItemsFromObservable(this.configureNameObservableForApi(ApiConstants.CONTEST_ATTR_API))
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("ORAS Contest Move Type")
        .withModelSelector("orasContestMoveType.name")
        .withDeltaSelector("orasContestMoveType")
        .withItemsFromObservable(this.configureNameObservableForApi(ApiConstants.ORAS_CONTEST_MOVE_TYPE_API))
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("ORAS Contest Attribute")
        .withModelSelector("orasContestAttribute.name")
        .withDeltaSelector("orasContestAttribute")
        .withItemsFromObservable(this.configureNameObservableForApi(ApiConstants.CONTEST_ATTR_API))
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("TM / HM")
        .withModelSelector("tm.name")
        .withDeltaSelector("tm")
        .withItemsFromObservable(this.service.get(ApiConstants.ITEM_API, null, [ {key: "type", value: "tm,hm"} ]))
        .build(),
      new NestedAttributeDefinitionBuilder(ContestCombo, ContestComboDelta)
        .withTitle("Contest Combos")
        .withKeyDefinitions([
          new SelectAttributeDefinitionBuilder()
            .withTitle("Second Attack")
            .withModelSelector("secondAttack.name")
            .withItemsFromObservable(this.configureNameObservableForApi(ApiConstants.ATTACK_API))
            .build(),
          new SelectAttributeDefinitionBuilder()
            .withTitle("Generation")
            .withModelSelector("generation.name")
            .withItemsFromObservable(this.configureNameObservableForApi(ApiConstants.CONTEST_TYPE_API))
            .withDisallowedItems(["DPP"])
            .build()
        ])
        .withFieldDefinitions([
          new BooleanAttributeDefinitionBuilder()
            .withTitle("overpowered")
            .build()
        ])
        .build()
    ]);
  }
}
