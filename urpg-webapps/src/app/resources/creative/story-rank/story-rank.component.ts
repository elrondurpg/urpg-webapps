import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../v2/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { StoryRank } from 'src/app/models/creative/StoryRank';
import { StoryRankDelta } from 'src/app/models/creative/StoryRankDelta';

@Component({
  selector: 'resources-story-rank',
  templateUrl: '../../v2/resource/resource.component.html'
})
export class StoryRankComponent extends ResourceComponent<StoryRank, StoryRankDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(StoryRank, StoryRankDelta, route);
    this.title = "Story Rank";
    this.api = ApiConstants.STORY_RANK_API;

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
