import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';

@Component({
  selector: 'resources-park-location',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class ParkLocationComponent extends ResourceComponent<UrpgObjectModel, UrpgObjectModel> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(UrpgObjectModel, UrpgObjectModel, route);
    this.title = "Park Location";
    this.api = ApiConstants.PARK_LOCATION_API;

    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(25)
        .withRequired(true)
        .build()
    ]);
  }
}
