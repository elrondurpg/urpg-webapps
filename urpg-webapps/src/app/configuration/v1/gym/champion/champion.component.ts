import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Champion } from 'src/app/models/v1/gym/Champion';
import { ChampionDelta } from 'src/app/models/v1/gym/ChampionDelta';
import { GeneralConstants } from 'src/app/constants/GeneralConstants';

@Component({
  selector: 'configuration-champion',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class ChampionComponent extends ConfigurationComponent<Champion, ChampionDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Champion, ChampionDelta, route);
    this.title = "Champion Slots";
    this.api = ApiConstants.CHAMPION_SLOT_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(20)
        .withRequired(true)
        .withInstructions(GeneralConstants.CHAMPION_NAME_INSTRUCTIONS)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Remove the current owner")
        .withDeltaSelector("removeOwner")
        .withDeltaOnly()
        .build()
    ]);
  }
}
