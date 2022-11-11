import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, ModelDefinition, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { GymDelta } from 'src/app/models/v1/gym/GymDelta';
import { Gym } from 'src/app/models/v1/gym/Gym';

@Component({
  selector: 'configuration-gym',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class GymComponent extends ConfigurationComponent<Gym, GymDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Gym, GymDelta, route);
    this.title = "Gym";
    this.api = ApiConstants.GYM_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(20)
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Badge")
        .withModelSelector("badge.name")
        .withItemsFromObservable(this.service.get(ApiConstants.BADGE_API))
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Type")
        .withModelSelector("type.name")
        .withItemsFromObservable(this.service.get(ApiConstants.TYPE_API))
        .build(),
      new BooleanAttributeDefinitionBuilder()
        .withTitle("Remove the current owner")
        .withDeltaSelector("removeOwner")
        .withDeltaOnly()
        .build()
    ]);
  }
}
