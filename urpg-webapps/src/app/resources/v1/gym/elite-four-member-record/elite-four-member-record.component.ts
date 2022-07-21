import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, DateAttributeDefinitionBuilder, ModelDefinition, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder } from 'zydeco-ts';
import { plainToClass } from 'class-transformer';
import { EliteFourMemberRecord } from 'src/app/models/v1/gym/EliteFourMemberRecord';
import { EliteFourMemberRecordDelta } from 'src/app/models/v1/gym/EliteFourMemberRecordDelta';

@Component({
  selector: 'resources-champion-record',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class EliteFourMemberRecordComponent extends ResourceComponent<EliteFourMemberRecord, EliteFourMemberRecordDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(EliteFourMemberRecord, EliteFourMemberRecordDelta, route);
    this.title = "Elite Four Member Record";
    this.api = ApiConstants.ELITE_FOUR_TERM_API;
    this.complex = true;

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
    this.service.get(this.api).subscribe((items : EliteFourMemberRecord[]) => {
      this.items = plainToClass(EliteFourMemberRecord, items);
      console.log(this.items);
    });
  }
}
