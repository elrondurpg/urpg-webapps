import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, NumberAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { Section } from 'src/app/models/v1/general/Section';
import { SectionDelta } from 'src/app/models/v1/general/SectionDelta';

@Component({
  selector: 'configuration-badge',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class SectionComponent extends ConfigurationComponent<Section, SectionDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Section, SectionDelta, route);
    this.title = "Section";
    this.api = ApiConstants.SECTION_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(15)
        .withRequired(true)
        .build(),
      new NumberAttributeDefinitionBuilder()
        .withTitle("Tier 1 Legendary Requirement")
        .build(),
      new NumberAttributeDefinitionBuilder()
        .withTitle("Tier 2 Legendary Requirement")
        .build()
    ]);
  }
}
