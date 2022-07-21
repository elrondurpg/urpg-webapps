import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../v2/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, ModelDefinition, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { GymDelta } from 'src/app/models/gym/GymDelta';
import { Gym } from 'src/app/models/gym/Gym';

@Component({
  selector: 'resources-gym',
  templateUrl: '../../v2/resource/resource.component.html'
})
export class GymComponent extends ResourceComponent<Gym, GymDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Gym, GymDelta, route);
    this.title = "Gym";
    this.api = ApiConstants.GYM_API;

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
