import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../v2/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, DateAttributeDefinitionBuilder, ModelDefinition, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { GymLeaderRecord } from 'src/app/models/gym/GymLeaderRecord';
import { GymLeaderRecordDelta } from 'src/app/models/gym/GymLeaderRecordDelta';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'resources-gym-leader-record',
  templateUrl: '../../v2/resource/resource.component.html'
})
export class GymLeaderRecordComponent extends ResourceComponent<GymLeaderRecord, GymLeaderRecordDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(GymLeaderRecord, GymLeaderRecordDelta, route);
    this.title = "Gym Leader Record";
    this.api = ApiConstants.GYM_LEADER_TERM_API;
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
        .withTitle("Gym")
        .withModelSelector("gym.name")
        .withItemsFromObservable(this.service.get(ApiConstants.GYM_API))
        .withRequired(true)
        .withImmutable(true)
        .build(),
      new DateAttributeDefinitionBuilder()
        .withTitle("Open Date")
        .withRequired(true)
        .withImmutable(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("League")
        .withModelSelector("league.name")
        .withItemsFromObservable(this.service.get(ApiConstants.GYM_LEAGUE_API))
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("TM")
        .withModelSelector("tm.name")
        .withDeltaSelector("tm")
        .withItemsFromObservable(this.service.get(ApiConstants.ITEM_API, null, [ {key: "type", value: "tm"} ]))
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
    this.service.get(this.api).subscribe((items : GymLeaderRecord[]) => {
      this.items = plainToClass(GymLeaderRecord, items);
      console.log(this.items);
    });
  }
}
