import { OwnedItem } from "src/app/models/stats/OwnedItem";
import { OwnedItemDelta } from "src/app/models/stats/OwnedItemDelta";
import { AttributeDefinitionBuilder, ModelDefinition, NestedAttributeDefinition } from "zydeco-ts";

export class MemberModelDefinitionBuilder {
    static build() {
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
                .withTitle("Discord Id")
                .withModelSelector("discordId")
                .withDeltaSelector("discordId")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Join Date")
                .withType("date")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Bot?")
                .withType("boolean")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Money")
                .withType("number")
                .withModelSelector("money")
                .withDeltaSelector("money")
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Wins")
                .withType("number")
                .withModelSelector("wins")
                .withDeltaSelector("wins")
                .withMinValue(0)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Losses")
                .withType("number")
                .withModelSelector("losses")
                .withDeltaSelector("losses")
                .withMinValue(0)
                .build(),
              new AttributeDefinitionBuilder()
                .withTitle("Draws")
                .withType("number")
                .withModelSelector("draws")
                .withDeltaSelector("draws")
                .withMinValue(0)
                .build(),
              new NestedAttributeDefinition(
                OwnedItem,
                OwnedItemDelta,
                [],
                [],
                "items",
                "items"
              )
            ]
        );
    }
}