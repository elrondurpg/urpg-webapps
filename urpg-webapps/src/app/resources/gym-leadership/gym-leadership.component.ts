import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { EditPaneAttribute, EditPaneAttributeBuilder } from 'src/app/models/EditPaneAttribute';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { GymOwnershipTerm } from 'src/app/models/gym/GymOwnershipTerm';
import { GymOwnershipTermDelta } from 'src/app/models/gym/GymOwnershipTermDelta';
import { ResourceComponent } from '../resource/resource.component';

@Component({ templateUrl: '../resource/resource.component.html' })
export class GymLeadershipComponent extends ResourceComponent<GymOwnershipTerm, GymOwnershipTermDelta> implements OnInit {

  memberNames: string[] = [];
  gymNames:string[] = [];
  leagueNames:string[] = [];
  tmNames:string[] = [];

  constructor(protected route:ActivatedRoute) { 
    super("Gym Leaders", ApiConstants.GYM_LEADER_TERM_API, GymOwnershipTerm, GymOwnershipTermDelta, route);

    this.complex = true;

    this.dataDefinition = new EditPaneDataDefinition(
      [
        new EditPaneAttributeBuilder()
          .withTitle("Member Name")
          .withType("select")
          .withModelSelector("owner.name")
          .withDeltaSelector("owner")
          .withItems(this.memberNames)
          .withRequired(true)
          .withImmutable(true)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("Gym")
          .withType("select")
          .withModelSelector("gym.name")
          .withItems(this.gymNames)
          .withRequired(true)
          .withImmutable(true)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("Open Date")
          .withType("date")
          .withRequired(true)
          .withImmutable(true)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("League")
          .withType("select")
          .withModelSelector("league.name")
          .withItems(this.leagueNames)
          .withRequired(true)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("TM")
          .withType("select")
          .withModelSelector("tm.name")
          .withDeltaSelector("tm")
          .withItems(this.tmNames)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("Become Current Owner?")
          .withType("boolean")
          .withDeltaSelector("becomeCurrentOwner")
          .withDeltaOnly()
          .build(),
        new EditPaneAttributeBuilder() 
          .withTitle("Wins")
          .withType("number")
          .build(),
        new EditPaneAttributeBuilder() 
          .withTitle("Losses")
          .withType("number")
          .build(),
        new EditPaneAttributeBuilder() 
          .withTitle("Draws")
          .withType("number")
          .build()
      ]
    );
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.service.get(this.api).subscribe((items : GymOwnershipTerm[]) => {
      this.items = plainToClass(GymOwnershipTerm, items);
      console.log(this.items);
    });

    this.memberNames.length = 0;
    this.service.get(ApiConstants.MEMBER_API).subscribe(items => this.memberNames.push(...items));

    this.gymNames.length = 0;
    this.service.get(ApiConstants.GYM_API).subscribe(items => this.gymNames.push(...items));

    this.leagueNames.length = 0;
    this.service.get(ApiConstants.GYM_LEAGUE_API).subscribe(items => this.leagueNames.push(...items));

    this.tmNames.length = 0;
    this.service.get(ApiConstants.ITEM_API, null, [ {key: "type", value: "tm"} ]).subscribe(items => this.tmNames.push(...items));
  }

}
