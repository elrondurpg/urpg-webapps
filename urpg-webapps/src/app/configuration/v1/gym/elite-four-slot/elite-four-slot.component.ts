import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { GeneralConstants } from 'src/app/constants/GeneralConstants';
import { EliteFour } from 'src/app/models/v1/gym/EliteFour';
import { EliteFourDelta } from 'src/app/models/v1/gym/EliteFourDelta';

@Component({
  selector: 'configuration-champion',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class EliteFourSlotComponent extends ConfigurationComponent<EliteFour, EliteFourDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(EliteFour, EliteFourDelta, route);
    this.title = "Elite Four Slots";
    this.api = ApiConstants.ELITE_FOUR_SLOT_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(20)
        .withRequired(true)
        .withInstructions(GeneralConstants.ELITE_FOUR_NAME_INSTRUCTIONS)
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Remove the current owner")
        .withDeltaSelector("removeOwner")
        .withDeltaOnly()
        .build()
    ]);
  }
}
