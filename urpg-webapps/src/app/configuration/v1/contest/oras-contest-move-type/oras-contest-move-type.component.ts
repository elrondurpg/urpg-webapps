import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ContestMoveType } from 'src/app/models/v1/contest/ContestMoveType';

@Component({
  selector: 'configuration-oras-contest-move-type',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class OrasContestMoveTypeComponent extends ConfigurationComponent<ContestMoveType, ContestMoveType> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ContestMoveType, ContestMoveType, route);
    this.title = "ORAS Contest Move Type";
    this.api = ApiConstants.ORAS_CONTEST_MOVE_TYPE_API;

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
