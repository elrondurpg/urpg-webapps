import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ArtRank } from 'src/app/models/v1/creative/ArtRank';
import { ArtRankDelta } from 'src/app/models/v1/creative/ArtRankDelta';

@Component({
  selector: 'resources-art-rank',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class ArtRankComponent extends ResourceComponent<ArtRank, ArtRankDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ArtRank, ArtRankDelta, route);
    this.title = "Art Rank";
    this.api = ApiConstants.ART_RANK_API;

    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(10)
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
