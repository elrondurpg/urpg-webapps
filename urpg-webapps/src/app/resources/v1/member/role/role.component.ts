import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, NestedAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Role } from 'src/app/models/v1/member/Role';
import { RoleDelta } from 'src/app/models/v1/member/RoleDelta';
import { Permission } from 'src/app/models/v1/member/Permission';
import { RolePermissionDelta } from 'src/app/models/v1/member/RolePermissionDelta';

@Component({
  selector: 'resources-role',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class RoleComponent extends ResourceComponent<Role, RoleDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Role, RoleDelta, route);
    this.title = "Role";
    this.api = ApiConstants.ROLE_API;
  }

  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(21)
        .withRequired(true)
        .build(),
      new NestedAttributeDefinitionBuilder(Permission, RolePermissionDelta)
        .withTitle("Permissions")
        .withImportable(true)
        .withKeyDefinitions([
          new SelectAttributeDefinitionBuilder() 
              .withTitle("Name")
              .withItemsFromObservable(this.service.get(ApiConstants.PERMISSION_API))
              .withFilterable(true)
              .build()
        ])
        .build()
    ]);
  }
}
