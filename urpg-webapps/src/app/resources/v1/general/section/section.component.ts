import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, NumberAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { Section } from 'src/app/models/v1/general/Section';
import { SectionDelta } from 'src/app/models/v1/general/SectionDelta';

@Component({
  selector: 'resources-badge',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class SectionComponent extends ResourceComponent<Section, SectionDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Section, SectionDelta, route);
    this.title = "Section";
    this.api = ApiConstants.SECTION_API;

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
