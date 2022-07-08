import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { EditPaneAttributeBuilder } from 'src/app/models/EditPaneAttribute';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { Gym } from 'src/app/models/gym/Gym';
import { GymDelta } from 'src/app/models/gym/GymDelta';
import { ResourceComponent } from '../resource/resource.component';

@Component({ templateUrl: '../resource/resource.component.html' })
export class GymComponent extends ResourceComponent<Gym, GymDelta> {

  badgeNames  :string[] = [];
  typeNames   :string[] = [];

  constructor(protected route:ActivatedRoute) { 
    super("Gym", ApiConstants.GYM_API, Gym, GymDelta, route);

    this.dataDefinition = new EditPaneDataDefinition(
      [
        new EditPaneAttributeBuilder()
          .withTitle("Name")
          .withModelSelector("name")
          .withDeltaSelector("name")
          .withMinLength(3)
          .withMaxLength(20)
          .withRequired(true)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("Badge")
          .withType("select")
          .withModelSelector("badge.name")
          .withDeltaSelector("badge")
          .withItems(this.badgeNames)
          .withRequired(true)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("Type")
          .withType("select")
          .withModelSelector("type.name")
          .withDeltaSelector("type")
          .withItems(this.typeNames)
          .build(),
        new EditPaneAttributeBuilder()
          .withTitle("Remove the current owner")
          .withType("boolean")
          .withDeltaSelector("removeOwner")
          .withDeltaOnly()
          .build()
      ]
    );
  }

  loadItems() {
    super.loadItems();

    this.badgeNames.length = 0;
    this.service.get(ApiConstants.BADGE_API).subscribe(items => this.badgeNames.push(...items));

    this.typeNames.length = 0;
    this.service.get(ApiConstants.TYPE_API).subscribe(items => this.typeNames.push(...items));
  }

}
