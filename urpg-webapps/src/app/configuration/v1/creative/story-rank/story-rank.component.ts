import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { StoryRank } from 'src/app/models/v1/creative/StoryRank';
import { StoryRankDelta } from 'src/app/models/v1/creative/StoryRankDelta';

@Component({
  selector: 'configuration-story-rank',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class StoryRankComponent extends ConfigurationComponent<StoryRank, StoryRankDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(StoryRank, StoryRankDelta, route);
    this.title = "Story Rank";
    this.api = ApiConstants.STORY_RANK_API;

  }
  userLoaded() {
    super.userLoaded();
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
