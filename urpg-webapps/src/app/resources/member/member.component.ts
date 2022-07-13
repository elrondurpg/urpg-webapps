import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { Member } from 'src/app/models/member/Member';
import { MemberDelta } from 'src/app/models/member/MemberDelta';
import { ResourceComponent } from '../v2/resource/resource.component';
import { MemberModelDefinitionBuilder } from './MemberModelDefinitionBuilder';

@Component({
  selector: 'urpg-member',
  templateUrl: '../v2/resource/resource.component.html',
  
})
export class MemberComponent extends ResourceComponent<Member, MemberDelta> {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Member, MemberDelta, route);
    this.title = "Member";
    this.api = ApiConstants.MEMBER_API;

    this.modelDefinition = MemberModelDefinitionBuilder.build(this.service.get(ApiConstants.ITEM_API));
  }

  
}
