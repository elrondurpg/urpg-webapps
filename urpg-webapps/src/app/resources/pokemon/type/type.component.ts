import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../v2/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Type } from 'src/app/models/species/Type';
import { TypeDelta } from 'src/app/models/species/TypeDelta';

@Component({
  selector: 'resources-type',
  templateUrl: '../../v2/resource/resource.component.html'
})
export class TypeComponent extends ResourceComponent<Type, TypeDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Type, TypeDelta, route);
    this.title = "Type";
    this.api = ApiConstants.TYPE_API;

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
