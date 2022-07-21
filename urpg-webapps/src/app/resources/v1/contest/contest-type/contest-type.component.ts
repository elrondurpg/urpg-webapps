import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ResourceComponent } from '../../lib/resource/resource.component';

@Component({
  selector: 'urpg-contest-type',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class ContestTypeComponent extends ResourceComponent<UrpgObjectModel, UrpgObjectModel> {

  constructor(protected route:ActivatedRoute) { 
    super(UrpgObjectModel, UrpgObjectModel, route);
    this.title = "Contest Type";
    this.api = ApiConstants.CONTEST_TYPE_API;

    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withRequired(true)
        .withMinLength(3)
        .withMaxLength(30)
        .build()
    ]);
  }

}
