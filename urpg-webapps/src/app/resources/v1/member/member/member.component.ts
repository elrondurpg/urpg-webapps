import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { Member } from 'src/app/models/v1/member/Member';
import { MemberDelta } from 'src/app/models/v1/member/MemberDelta';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { MemberModelDefinitionBuilder } from './MemberModelDefinitionBuilder';

@Component({
  selector: 'urpg-member',
  templateUrl: '../../lib/resource/resource.component.html',
})
export class MemberComponent extends ResourceComponent<Member, MemberDelta> {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Member, MemberDelta, route);
    this.title = "Member";
    this.api = ApiConstants.MEMBER_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = MemberModelDefinitionBuilder.build(
      this.service.get(ApiConstants.GYM_API),
      this.service.get(ApiConstants.GYM_LEAGUE_API),
      this.service.get(ApiConstants.KNOWN_CHAMPION_API),
      this.service.get(ApiConstants.KNOWN_E4_MEMBER_API),
      this.service.get(ApiConstants.KNOWN_GYM_LEADER_API),
      this.service.get(ApiConstants.ITEM_API),
      this.service.get(ApiConstants.ROLE_API), 
      this.service.get(ApiConstants.SECTION_API));
  }

  loadItems() {
    this.service.get(this.api, null, [{ key: "bot", value: "false" }]).subscribe(items => this.items = items);
  }

  
}
