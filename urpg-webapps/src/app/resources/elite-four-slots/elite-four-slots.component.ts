import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { GeneralConstants } from 'src/app/constants/GeneralConstants';
import { EditPaneAttributeBuilder } from 'src/app/models/EditPaneAttribute';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { EliteFour } from 'src/app/models/gym/EliteFour';
import { EliteFourDelta } from 'src/app/models/gym/EliteFourDelta';
import { ResourceComponent } from '../resource/resource.component';

@Component({ templateUrl: '../resource/resource.component.html' })
export class EliteFourSlotsComponent extends ResourceComponent<EliteFour, EliteFourDelta> implements OnInit {

  constructor(protected route:ActivatedRoute) { 
    super("Elite Four Slots", ApiConstants.ELITE_FOUR_SLOT_API, EliteFour, EliteFourDelta, route);

    this.dataDefinition = new EditPaneDataDefinition(
      [
        new EditPaneAttributeBuilder()
          .withTitle("Name")
          .withModelSelector("name")
          .withDeltaSelector("name")
          .withMinLength(3)
          .withMaxLength(20)
          .withRequired(true)
          .withInstructions(GeneralConstants.ELITE_FOUR_NAME_INSTRUCTIONS)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("Remove the current owner")
          .withType("boolean")
          .withDeltaSelector("removeOwner")
          .withDeltaOnly()
          .build()
      ]
    );
  }

}
