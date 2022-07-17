import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ContestType } from 'src/app/models/contest/ContestType';
import { ContestTypeDelta } from 'src/app/models/contest/ContestTypeDelta';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ResourceComponent } from '../v2/resource/resource.component';

@Component({
  selector: 'urpg-contest-type',
  templateUrl: '../v2/resource/resource.component.html'
})
export class ContestTypeComponent extends ResourceComponent<ContestType, ContestTypeDelta> {

  constructor(protected route:ActivatedRoute) { 
    super(ContestType, ContestTypeDelta, route);
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
