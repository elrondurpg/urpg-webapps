import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../v2/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ContestMoveType } from 'src/app/models/contest/ContestMoveType';

@Component({
  selector: 'resources-oras-contest-move-type',
  templateUrl: '../../v2/resource/resource.component.html'
})
export class OrasContestMoveTypeComponent extends ResourceComponent<ContestMoveType, ContestMoveType> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ContestMoveType, ContestMoveType, route);
    this.title = "ORAS Contest Move Type";
    this.api = ApiConstants.ORAS_CONTEST_MOVE_TYPE_API;

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
