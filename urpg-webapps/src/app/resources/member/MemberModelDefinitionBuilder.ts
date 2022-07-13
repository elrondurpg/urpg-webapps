import { Observable } from "rxjs";
import { OwnedItem } from "src/app/models/stats/OwnedItem";
import { OwnedItemDelta } from "src/app/models/stats/OwnedItemDelta";
import { AttributeDefinitionBuilder, AttributeType, ModelDefinition, NestedAttributeDefinitionBuilder } from "zydeco-ts";

export class MemberModelDefinitionBuilder {
    static build(itemObservable:Observable<any>) {
        return new ModelDefinition(
            [
              new AttributeDefinitionBuilder()
                .withTitle("Name")
                .withModelSelector("name")
                .withDeltaSelector("name")
                .withMinLength(3)
                .withMaxLength(20)
                .withRequired(true)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Join Date")
                .withType(AttributeType.DATE)
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Discord Id")
                .withModelSelector("discordId")
                .withDeltaSelector("discordId")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Bot?")
                .withType(AttributeType.BOOLEAN)
                .withModelSelector("bot")
                .withDeltaSelector("bot")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Money")
                .withType(AttributeType.NUMBER)
                .withModelSelector("money")
                .withDeltaSelector("money")
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Wins")
                .withType(AttributeType.NUMBER)
                .withModelSelector("wins")
                .withDeltaSelector("wins")
                .withMinValue(0)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Losses")
                .withType(AttributeType.NUMBER)
                .withModelSelector("losses")
                .withDeltaSelector("losses")
                .withMinValue(0)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Draws")
                .withType(AttributeType.NUMBER)
                .withModelSelector("draws")
                .withDeltaSelector("draws")
                .withMinValue(0)
                .build(),
              new NestedAttributeDefinitionBuilder(OwnedItem, OwnedItemDelta)
                .withTitle("Owned Items")
                .withModelSelector("items")
                .withDeltaSelector("items")
                .withKeyDefinitions([
                  new AttributeDefinitionBuilder() 
                    .withTitle("Name")
                    .withType(AttributeType.SELECT)
                    .withModelSelector("item.name")
                    .withDeltaSelector("item")
                    .withItemsFromObservable(itemObservable)
                    .withFilterable(true)
                    .build()
                ])
                .withFieldDefinitions([
                  new AttributeDefinitionBuilder()
                    .withTitle("Quantity")
                    .withType(AttributeType.NUMBER)
                    .build()
                ])
                .build()
            ]
        );
    }
}