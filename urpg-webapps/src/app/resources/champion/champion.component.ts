import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { GeneralConstants } from 'src/app/constants/GeneralConstants';
import { EditPaneAttributeBuilder } from 'src/app/models/EditPaneAttribute';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { Champion } from 'src/app/models/gym/Champion';
import { ChampionDelta } from 'src/app/models/gym/ChampionDelta';
import { ResourceComponent } from '../resource/resource.component';

@Component({ templateUrl: '../resource/resource.component.html' })
export class ChampionComponent extends ResourceComponent<Champion, ChampionDelta> implements OnInit {

  constructor(protected route:ActivatedRoute) { 
    super("Champion", ApiConstants.CHAMPION_SLOT_API, Champion, ChampionDelta, route);

    this.dataDefinition = new EditPaneDataDefinition(
      [
        new EditPaneAttributeBuilder()
          .withTitle("Name")
          .withModelSelector("name")
          .withDeltaSelector("name")
          .withMinLength(3)
          .withMaxLength(20)
          .withRequired(true)
          .withInstructions(GeneralConstants.CHAMPION_NAME_INSTRUCTIONS)
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
