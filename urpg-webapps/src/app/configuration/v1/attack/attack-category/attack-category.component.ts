import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';

@Component({
  selector: 'configuration-attack-category',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class AttackCategoryComponent extends ConfigurationComponent<UrpgObjectModel, UrpgObjectModel> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(UrpgObjectModel, UrpgObjectModel, route);
    this.title = "Attack Category";
    this.api = ApiConstants.ATTACK_CATEGORY_API;
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
