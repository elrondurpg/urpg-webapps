import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, DateAttributeDefinitionBuilder, ModelDefinition, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder } from 'zydeco-ts';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { EliteFourMemberRecord } from 'src/app/models/v1/gym/EliteFourMemberRecord';
import { EliteFourMemberRecordDelta } from 'src/app/models/v1/gym/EliteFourMemberRecordDelta';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { Page } from '../../lib/model/Page';

@Component({
  selector: 'configuration-champion-record',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class EliteFourMemberRecordComponent extends ConfigurationComponent<EliteFourMemberRecord, EliteFourMemberRecordDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(EliteFourMemberRecord, EliteFourMemberRecordDelta, route);
    this.title = "Elite Four Member Record";
    this.api = ApiConstants.ELITE_FOUR_TERM_API;
    this.complex = true;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new SelectAttributeDefinitionBuilder()
          .withTitle("Member Name")
          .withModelSelector("owner.name")
          .withDeltaSelector("owner")
          .withItemsFromObservable(this.service.get(ApiConstants.MEMBER_API, null, [{ key: "bot", value: "false" }]))
          .withRequired(true)
          .withImmutable(true)
          .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Elite Four Slot")
        .withModelSelector("slot.name")
        .withDeltaSelector("slot")
        .withItemsFromObservable(this.service.get(ApiConstants.ELITE_FOUR_SLOT_API))
        .withRequired(true)
        .withImmutable(true)
        .build(),
      new DateAttributeDefinitionBuilder()
        .withTitle("Open Date")
        .withRequired(true)
        .withImmutable(true)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Become Current Owner?")
        .withDeltaSelector("becomeCurrentOwner")
        .withDeltaOnly()
        .build(),
      new NumberAttributeDefinitionBuilder() 
        .withTitle("Wins")
        .build(),
      new NumberAttributeDefinitionBuilder() 
        .withTitle("Losses")
        .build(),
      new NumberAttributeDefinitionBuilder() 
        .withTitle("Draws")
        .build()
    ]);
  }

  loadItems() {
    this.service.get(this.api).subscribe(items => {
      let page = plainToClassFromExist(new Page<UrpgObjectModel>(UrpgObjectModel), items);
      this.items = page.content.map(item => item.getDisplayName());
      console.log(this.items);
    });
  }
}
