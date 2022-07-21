import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { GymLeague } from 'src/app/models/v1/gym/GymLeague';

@Component({
  selector: 'resources-badge',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class GymLeagueComponent extends ResourceComponent<GymLeague, UrpgObjectModel> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(GymLeague, UrpgObjectModel, route);
    this.title = "Gym League";
    this.api = ApiConstants.GYM_LEAGUE_API;

    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(30)
        .withRequired(true)
        .build()
    ]);
  }
}
