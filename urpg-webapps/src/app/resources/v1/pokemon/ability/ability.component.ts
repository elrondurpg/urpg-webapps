import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/models/v1/ability/Ability';
import { ActivatedRoute } from '@angular/router';
import { AbilityDelta } from 'src/app/models/v1/ability/AbilityDelta';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';

@Component({
  selector: 'resources-ability',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class AbilityComponent extends ResourceComponent<Ability, AbilityDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Ability, AbilityDelta, route);
    this.title = "Ability";
    this.api = ApiConstants.ABILITY_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(25)
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Description")
        .withMinLength(3)
        .withMaxLength(25)
        .build()
    ]);
  }
}
