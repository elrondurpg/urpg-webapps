import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ContestMoveType } from 'src/app/models/v1/contest/ContestMoveType';

@Component({
  selector: 'resources-rse-contest-move-type',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class RseContestMoveTypeComponent extends ResourceComponent<ContestMoveType, ContestMoveType> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ContestMoveType, ContestMoveType, route);
    this.title = "RSE Contest Move Type";
    this.api = ApiConstants.RSE_CONTEST_MOVE_TYPE_API;

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
