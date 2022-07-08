import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { EditPaneAttributeBuilder } from 'src/app/models/EditPaneAttribute';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { ChampionOwnershipTerm } from 'src/app/models/gym/ChampionOwnershipTerm';
import { ChampionOwnershipTermDelta } from 'src/app/models/gym/ChampionOwnershipTermDelta';
import { ResourceComponent } from '../resource/resource.component';

@Component({ templateUrl: '../resource/resource.component.html' })
export class ChampionOwnershipComponent extends ResourceComponent<ChampionOwnershipTerm, ChampionOwnershipTermDelta> implements OnInit {

  memberNames: string[] = [];
  championSlotNames:string[] = [];

  constructor(protected route:ActivatedRoute) { 
    super("Champion Terms", ApiConstants.CHAMPION_TERM_API, ChampionOwnershipTerm, ChampionOwnershipTermDelta, route);

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
          .withTitle("Champion Slot")
          .withType("select")
          .withModelSelector("slot.name")
          .withDeltaSelector("slot")
          .withItems(this.championSlotNames)
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
    this.service.get(this.api).subscribe((items : ChampionOwnershipTerm[]) => {
      this.items = plainToClass(ChampionOwnershipTerm, items);
      console.log(this.items);
    });

    this.memberNames.length = 0;
    this.service.get(ApiConstants.MEMBER_API).subscribe(items => this.memberNames.push(...items));

    this.championSlotNames.length = 0;
    this.service.get(ApiConstants.CHAMPION_SLOT_API).subscribe(items => this.championSlotNames.push(...items));
  }

}
