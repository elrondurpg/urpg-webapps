import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { Item } from 'src/app/models/v1/item/Item';
import { ItemDelta } from 'src/app/models/v1/item/ItemDelta';

@Component({
  selector: 'resources-item',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class ItemComponent extends ResourceComponent<Item, ItemDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Item, ItemDelta, route);
    this.title = "Item";
    this.api = ApiConstants.ITEM_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(30)
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Type")
        .withItems(["TM", "HM", "Held", "Mail", "Evolution", "Other", "Mega", "Special", "Berry", "Contest", "Fossil", "ZCrystal"])
        .withRequired(true)
        .build(),
      new NumberAttributeDefinitionBuilder()
        .withTitle("Price")
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Description")
        .withMinLength(3)
        .withMaxLength(720)
        .build()
    ]);
  }
}
