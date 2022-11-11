import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';

@Component({
  selector: 'urpg-contest-type',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class ContestTypeComponent extends ConfigurationComponent<UrpgObjectModel, UrpgObjectModel> {

  constructor(protected route:ActivatedRoute) { 
    super(UrpgObjectModel, UrpgObjectModel, route);
    this.title = "Contest Type";
    this.api = ApiConstants.CONTEST_TYPE_API;

  }
  userLoaded() {
    super.userLoaded();
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
