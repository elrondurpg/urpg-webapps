import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, DateAttributeDefinitionBuilder, ModelDefinition, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { GymLeaderRecord } from 'src/app/models/v1/gym/GymLeaderRecord';
import { GymLeaderRecordDelta } from 'src/app/models/v1/gym/GymLeaderRecordDelta';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { Page } from '../../lib/model/Page';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';

@Component({
  selector: 'configuration-gym-leader-record',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class GymLeaderRecordComponent extends ConfigurationComponent<GymLeaderRecord, GymLeaderRecordDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(GymLeaderRecord, GymLeaderRecordDelta, route);
    this.title = "Gym Leader Record";
    this.api = ApiConstants.GYM_LEADER_TERM_API;
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
    this.service.get(this.api).subscribe(items => {
      let page = plainToClassFromExist(new Page<UrpgObjectModel>(UrpgObjectModel), items);
      this.items = page.content.map(item => item.getDisplayName());
      console.log(this.items);
    });
  }
}
