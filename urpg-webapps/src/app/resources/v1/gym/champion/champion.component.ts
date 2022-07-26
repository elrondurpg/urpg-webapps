import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Champion } from 'src/app/models/v1/gym/Champion';
import { ChampionDelta } from 'src/app/models/v1/gym/ChampionDelta';
import { GeneralConstants } from 'src/app/constants/GeneralConstants';

@Component({
  selector: 'resources-champion',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class ChampionComponent extends ResourceComponent<Champion, ChampionDelta> implements OnInit {

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
