import { Component, OnInit } from '@angular/core';
import { AttackTargetType } from 'src/app/models/v1/attack/AttackTargetType';
import { ActivatedRoute } from '@angular/router';
import { AttackTargetTypeDelta } from 'src/app/models/v1/attack/AttackTargetTypeDelta';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';

@Component({
  selector: 'resources-attack-target-type',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class AttackTargetTypeComponent extends ResourceComponent<AttackTargetType, AttackTargetTypeDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(AttackTargetType, AttackTargetTypeDelta, route);
    this.title = "Attack Target Type";
    this.api = ApiConstants.ATTACK_TARGET_TYPE_API;

    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(35)
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Description")
        .withMinLength(3)
        .withMaxLength(100)
        .build()
    ]);
  }
}
