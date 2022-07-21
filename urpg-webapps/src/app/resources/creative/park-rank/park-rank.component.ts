import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../v2/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ParkRank } from 'src/app/models/creative/ParkRank';
import { ParkRankDelta } from 'src/app/models/creative/ParkRankDelta';

@Component({
  selector: 'resources-park-rank',
  templateUrl: '../../v2/resource/resource.component.html'
})
export class ParkRankComponent extends ResourceComponent<ParkRank, ParkRankDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ParkRank, ParkRankDelta, route);
    this.title = "Park Rank";
    this.api = ApiConstants.PARK_RANK_API;

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
