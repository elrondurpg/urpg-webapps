import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, DateAttributeDefinitionBuilder, ModelDefinition, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder } from 'zydeco-ts';
import { ChampionRecordDelta } from 'src/app/models/v1/gym/ChampionRecordDelta';
import { ChampionRecord } from 'src/app/models/v1/gym/ChampionRecord';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'configuration-champion-record',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class ChampionRecordComponent extends ConfigurationComponent<ChampionRecord, ChampionRecordDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ChampionRecord, ChampionRecordDelta, route);
    this.title = "Champion Record";
    this.api = ApiConstants.CHAMPION_TERM_API;
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
        .withTitle("Champion Slot")
        .withModelSelector("slot.name")
        .withDeltaSelector("slot")
        .withItemsFromObservable(this.service.get(ApiConstants.CHAMPION_SLOT_API))
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
    this.service.get(this.api).subscribe((items : ChampionRecord[]) => {
      this.items = plainToClass(ChampionRecord, items);
      console.log(this.items);
    });
  }
}
