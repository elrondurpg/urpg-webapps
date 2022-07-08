import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { Member } from 'src/app/models/member/Member';
import { MemberDelta } from 'src/app/models/member/MemberDelta';
import { AttributeDefinitionBuilder, ModelDefinition, RestService } from 'zydeco-ts';
import { ResourceComponent } from '../v2/resource/resource.component';

@Component({
  selector: 'urpg-member',
  templateUrl: '../v2/resource/resource.component.html',
  
})
export class MemberComponent extends ResourceComponent<Member, MemberDelta> {

  constructor(
    protected service:RestService,
    protected route:ActivatedRoute
  ) { 
    super(Member, MemberDelta, service, route);
    this.breadcrumbs = [
      {
        "url": "test",
        "title": "Dashboard"
      }
    ];
    this.title = "Member";
    this.api = ApiConstants.MEMBER_API;

    this.modelDefinition = new ModelDefinition(
      [
        new AttributeDefinitionBuilder()
          .withTitle("Name")
          .withModelSelector("name")
          .withDeltaSelector("name")
          .withMinLength(3)
          .withMaxLength(20)
          .withRequired(true)
          .build()
      ]
    );
  }

}
