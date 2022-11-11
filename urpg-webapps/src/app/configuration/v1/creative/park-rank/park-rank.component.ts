import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ParkRank } from 'src/app/models/v1/creative/ParkRank';
import { ParkRankDelta } from 'src/app/models/v1/creative/ParkRankDelta';

@Component({
  selector: 'configuration-park-rank',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class ParkRankComponent extends ConfigurationComponent<ParkRank, ParkRankDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ParkRank, ParkRankDelta, route);
    this.title = "Park Rank";
    this.api = ApiConstants.PARK_RANK_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(25)
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Requirement")
        .withMinLength(3)
        .withMaxLength(10)
        .withRequired(true)
        .build()
    ]);
  }
}
