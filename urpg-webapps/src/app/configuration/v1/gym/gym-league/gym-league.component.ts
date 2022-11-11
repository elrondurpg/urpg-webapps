import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { GymLeague } from 'src/app/models/v1/gym/GymLeague';

@Component({
  selector: 'configuration-badge',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class GymLeagueComponent extends ConfigurationComponent<GymLeague, UrpgObjectModel> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(GymLeague, UrpgObjectModel, route);
    this.title = "Gym League";
    this.api = ApiConstants.GYM_LEAGUE_API;
  }
  
  userLoaded() {
    super.userLoaded();
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
