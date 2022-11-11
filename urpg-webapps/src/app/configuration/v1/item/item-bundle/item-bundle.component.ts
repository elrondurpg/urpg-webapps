import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ItemBundle } from 'src/app/models/v1/item/ItemBundle';
import { ItemBundleDelta } from 'src/app/models/v1/item/ItemBundleDelta';
import { ItemBundleItem } from 'src/app/models/v1/item/ItemBundleItem';
import { ItemBundleItemDelta } from 'src/app/models/v1/item/ItemBundleItemDelta';
import { NestedAttributeDefinitionBuilder, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ModelDefinition } from 'zydeco-ts';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';

@Component({
  selector: 'configuration-item-bundle',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class ItemBundleComponent extends ConfigurationComponent<ItemBundle, ItemBundleDelta> {

  constructor(protected route:ActivatedRoute) { 
    super(ItemBundle, ItemBundleDelta, route);
    this.title = "Item Bundle";
    this.api = ApiConstants.ITEM_BUNDLE_API;
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
      new NumberAttributeDefinitionBuilder()
        .withTitle("Price")
        .withRequired(true)
        .build(),
      new NestedAttributeDefinitionBuilder(ItemBundleItem, ItemBundleItemDelta)
        .withTitle("Items")
        .withKeyDefinitions([
          new SelectAttributeDefinitionBuilder()
            .withTitle("Item")
            .withModelSelector("item.name")
            .withItemsFromObservable(this.service.get(ApiConstants.ITEM_API))
            .build()
        ])
        .withFieldDefinitions([
          new NumberAttributeDefinitionBuilder()
            .withTitle("Quantity")
            .withRequired(true)
            .build()
        ])
        .build()
    ]);
  }

}
