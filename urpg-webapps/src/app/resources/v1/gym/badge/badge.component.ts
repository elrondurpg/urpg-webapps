import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';

@Component({
  selector: 'resources-badge',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class BadgeComponent extends ResourceComponent<UrpgObjectModel, UrpgObjectModel> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(UrpgObjectModel, UrpgObjectModel, route);
    this.title = "Badge";
    this.api = ApiConstants.BADGE_API;

    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(20)
        .withRequired(true)
        .build()
    ]);
  }
}
