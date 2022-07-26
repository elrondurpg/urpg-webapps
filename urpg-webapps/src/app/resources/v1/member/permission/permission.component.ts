import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Permission } from 'src/app/models/v1/member/Permission';
import { PermissionDelta } from 'src/app/models/v1/member/PermissionDelta';

@Component({
  selector: 'resources-permission',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class PermissionComponent extends ResourceComponent<Permission, PermissionDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Permission, PermissionDelta, route);
    this.title = "Permission";
    this.api = ApiConstants.PERMISSION_API;
  }

  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(20)
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Description")
        .withMinLength(3)
        .withMaxLength(60)
        .withRequired(true)
        .build()
    ]);
  }
}
