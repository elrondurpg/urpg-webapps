import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { Member } from 'src/app/models/v1/member/Member';
import { MemberDelta } from 'src/app/models/v1/member/MemberDelta';
import { MemberRoleDelta } from 'src/app/models/v1/member/MemberRoleDelta';
import { Role } from 'src/app/models/v1/member/Role';
import { ModelDefinition, NestedAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ResourceComponent } from '../../lib/resource/resource.component';

@Component({
  selector: 'resources-bot',
  templateUrl: '../../lib/resource/resource.component.html',
})
export class BotComponent extends ResourceComponent<Member, MemberDelta> {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Member, MemberDelta, route);
    this.title = "Bot";
    this.api = ApiConstants.MEMBER_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withModelSelector("name")
        .withDeltaSelector("name")
        .withMinLength(3)
        .withMaxLength(20)
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Discord Id")
        .withModelSelector("discordId")
        .withDeltaSelector("discordId")
        .withRequired(true)
        .withImmutable(true)
        .build(),
      new NestedAttributeDefinitionBuilder(Role, MemberRoleDelta)
        .withTitle("Roles")
        .withKeyDefinitions([
          new SelectAttributeDefinitionBuilder()
            .withTitle("Name")
            .withItemsFromObservable(this.service.get(ApiConstants.ROLE_API))
            .withFilterable(true)
            .build()
        ])
        .build(),
    ]);
  }

  loadItems() {
    this.service.get(this.api, null, [{ key: "bot", value: "true" }]).subscribe(items => this.items = items);
  }

  override save() {
    if (this.editType == "create") {
      this.delta.joinDate = new Date();
      this.delta.bot = true;
    }
    super.save();
  }
  
}
