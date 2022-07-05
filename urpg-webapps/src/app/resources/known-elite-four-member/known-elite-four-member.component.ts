import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditPaneAttributeBuilder } from 'src/app/models/EditPaneAttribute';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { KnownEliteFourMember } from 'src/app/models/gym/KnownEliteFourMember';
import { KnownEliteFourMemberDelta } from 'src/app/models/gym/KnownEliteFourMemberDelta';
import { ResourceComponent } from '../resource/resource.component';

@Component({ templateUrl: '../resource/resource.component.html' })
export class KnownEliteFourMemberComponent extends ResourceComponent<KnownEliteFourMember, KnownEliteFourMemberDelta> implements OnInit {

  constructor(protected route:ActivatedRoute) { 
    super("Known Elite Four Member", "/knownEliteFourMember", KnownEliteFourMember, KnownEliteFourMemberDelta, route);

    this.dataDefinition = new EditPaneDataDefinition(
      [
        new EditPaneAttributeBuilder()
          .withTitle("Name")
          .withModelSelector("name")
          .withDeltaSelector("name")
          .withMinLength(3)
          .withMaxLength(30)
          .withRequired(true)
          .build()
      ]
    );
  }

}
