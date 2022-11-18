import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { Species } from 'src/app/models/v1/species/Species';
import { SpeciesDelta } from 'src/app/models/v1/species/SpeciesDelta';
import { SpeciesModelDefinitionBuilder } from './SpeciesModelDefinitionBuilder';

@Component({
  selector: 'configuration-ability',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class SpeciesComponent extends ConfigurationComponent<Species, SpeciesDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Species, SpeciesDelta, route);
    this.title = "Species";
    this.api = ApiConstants.SPECIES_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = SpeciesModelDefinitionBuilder.build(
      this.configureNameObservableForApi(ApiConstants.ABILITY_API),
      this.service.get(ApiConstants.ART_RANK_API),
      this.configureNameObservableForApi(ApiConstants.ATTACK_API),
      this.service.get(ApiConstants.PARK_LOCATION_API),
      this.service.get(ApiConstants.PARK_RANK_API),
      this.configureNameObservableForApi(ApiConstants.SPECIES_API),
      this.service.get(ApiConstants.STORY_RANK_API),
      this.configureNameObservableForApi(ApiConstants.TYPE_API)
    );
  }
}
