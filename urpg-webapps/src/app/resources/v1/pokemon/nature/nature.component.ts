import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';

@Component({
  selector: 'resources-nature',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class NatureComponent extends ResourceComponent<UrpgObjectModel, UrpgObjectModel> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(UrpgObjectModel, UrpgObjectModel, route);
    this.title = "Nature";
    this.api = ApiConstants.NATURE_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(10)
        .withRequired(true)
        .build()
    ]);
  }
}
