import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Type } from 'src/app/models/v1/species/Type';
import { TypeDelta } from 'src/app/models/v1/species/TypeDelta';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';

@Component({
  selector: 'configuration-type',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class TypeComponent extends ConfigurationComponent<Type, TypeDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Type, TypeDelta, route);
    this.title = "Type";
    this.api = ApiConstants.TYPE_API;
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
