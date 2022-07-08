import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { EditPaneAttributeBuilder } from 'src/app/models/EditPaneAttribute';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { EliteFourOwnershipTerm } from 'src/app/models/gym/EliteFourOwnershipTerm';
import { EliteFourOwnershipTermDelta } from 'src/app/models/gym/EliteFourOwnershipTermDelta';
import { ResourceComponent } from '../resource/resource.component';

@Component({ templateUrl: '../resource/resource.component.html' })
export class EliteFourMembershipComponent extends ResourceComponent<EliteFourOwnershipTerm, EliteFourOwnershipTermDelta> implements OnInit {

  memberNames: string[] = [];
  eliteFourSlotNames:string[] = [];

  constructor(protected route:ActivatedRoute) { 
    super("Elite Four Terms", ApiConstants.ELITE_FOUR_TERM_API, EliteFourOwnershipTerm, EliteFourOwnershipTermDelta, route);

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
          .withTitle("Elite Four Slot")
          .withType("select")
          .withModelSelector("slot.name")
          .withDeltaSelector("slot")
          .withItems(this.eliteFourSlotNames)
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
    this.service.get(this.api).subscribe((items : EliteFourOwnershipTerm[]) => {
      this.items = plainToClass(EliteFourOwnershipTerm, items);
      console.log(this.items);
    });

    this.memberNames.length = 0;
    this.service.get(ApiConstants.MEMBER_API).subscribe(items => this.memberNames.push(...items));

    this.eliteFourSlotNames.length = 0;
    this.service.get(ApiConstants.ELITE_FOUR_SLOT_API).subscribe(items => this.eliteFourSlotNames.push(...items));
  }

}
