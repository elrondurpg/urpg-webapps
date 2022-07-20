import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../v2/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Species } from 'src/app/models/species/Species';
import { SpeciesDelta } from 'src/app/models/species/SpeciesDelta';
import { SpeciesModelDefinitionBuilder } from './SpeciesModelDefinitionBuilder';

@Component({
  selector: 'resources-ability',
  templateUrl: '../../v2/resource/resource.component.html'
})
export class SpeciesComponent extends ResourceComponent<Species, SpeciesDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Species, SpeciesDelta, route);
    this.title = "Species";
    this.api = ApiConstants.SPECIES_API;

    this.modelDefinition = SpeciesModelDefinitionBuilder.build(
      this.service.get(ApiConstants.ABILITY_API),
      this.service.get(ApiConstants.ART_RANK_API),
      this.service.get(ApiConstants.ATTACK_API),
      this.service.get(ApiConstants.PARK_LOCATION_API),
      this.service.get(ApiConstants.PARK_RANK_API),
      this.service.get(ApiConstants.SPECIES_API),
      this.service.get(ApiConstants.STORY_RANK_API),
      this.service.get(ApiConstants.TYPE_API)
    );
  }
}
