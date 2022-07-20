import { Observable } from "rxjs";
import { MemberRoleDelta } from "src/app/models/member/MemberRoleDelta";
import { Role } from "src/app/models/member/Role";
import { GymVictory } from "src/app/models/stats/GymVictory";
import { GymVictoryDelta } from "src/app/models/stats/GymVictoryDelta";
import { LegendaryProgress } from "src/app/models/stats/LegendaryProgress";
import { LegendaryProgressDelta } from "src/app/models/stats/LegendaryProgressDelta";
import { OwnedItem } from "src/app/models/stats/OwnedItem";
import { OwnedItemDelta } from "src/app/models/stats/OwnedItemDelta";
import { BooleanAttributeDefinitionBuilder, DateAttributeDefinitionBuilder, ModelDefinition, NestedAttributeDefinitionBuilder, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from "zydeco-ts";

export class MemberModelDefinitionBuilder {
    static build(
      gymObservable:Observable<any>,
      gymLeagueObservable:Observable<any>,
      knownChampionObservable:Observable<any>,
      knownEliteFourMemberObservable:Observable<any>,
      knownGymLeaderObservable:Observable<any>,
      itemObservable:Observable<any>,
      roleObservable:Observable<any>,
      sectionObservable:Observable<any>
    ) {
        return new ModelDefinition(
            [
              new StringAttributeDefinitionBuilder()
                .withTitle("Name")
                .withModelSelector("name")
                .withDeltaSelector("name")
                .withMinLength(3)
                .withMaxLength(20)
                .withRequired(true)
                .build(),
              new DateAttributeDefinitionBuilder()
                .withTitle("Join Date")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new StringAttributeDefinitionBuilder()
                .withTitle("Discord Id")
                .withModelSelector("discordId")
                .withDeltaSelector("discordId")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new BooleanAttributeDefinitionBuilder()
                .withTitle("Bot?")
                .withModelSelector("bot")
                .withDeltaSelector("bot")
                .withRequired(true)
                .withImmutable(true)
                .build(),
              new BooleanAttributeDefinitionBuilder()
                .withTitle("Banned?")
                .withModelSelector("banned")
                .withDeltaSelector("banned")
                .build(),
              new DateAttributeDefinitionBuilder()
                .withTitle("Ban Expiration Date")
                .build(),
              new NumberAttributeDefinitionBuilder()
                .withTitle("Money")
                .withModelSelector("money")
                .withDeltaSelector("money")
                .build(),
              new NumberAttributeDefinitionBuilder()
                .withTitle("Wins")
                .withModelSelector("wins")
                .withDeltaSelector("wins")
                .withMinValue(0)
                .build(),
              new NumberAttributeDefinitionBuilder()
                .withTitle("Losses")
                .withModelSelector("losses")
                .withDeltaSelector("losses")
                .withMinValue(0)
                .build(),
              new NumberAttributeDefinitionBuilder()
                .withTitle("Draws")
                .withModelSelector("draws")
                .withDeltaSelector("draws")
                .withMinValue(0)
                .build(),
              new NestedAttributeDefinitionBuilder(Role, MemberRoleDelta)
                .withTitle("Roles")
                .withKeyDefinitions([
                  new SelectAttributeDefinitionBuilder()
                    .withTitle("Name")
                    .withItemsFromObservable(roleObservable)
                    .withFilterable(true)
                    .build()
                ])
                .build(),
              new NestedAttributeDefinitionBuilder(OwnedItem, OwnedItemDelta)
                .withTitle("Items")
                .withModelSelector("items")
                .withDeltaSelector("items")
                .withKeyDefinitions([
                  new SelectAttributeDefinitionBuilder() 
                    .withTitle("Name")
                    .withModelSelector("item.name")
                    .withDeltaSelector("item")
                    .withItemsFromObservable(itemObservable)
                    .withFilterable(true)
                    .build()
                ])
                .withFieldDefinitions([
                  new NumberAttributeDefinitionBuilder()
                    .withTitle("Quantity")
                    .build()
                ])
                .build(),
              new NestedAttributeDefinitionBuilder(GymVictory, GymVictoryDelta)
                .withTitle("Gym Victories")
                .withModelSelector("gymVictories")
                .withDeltaSelector("gymVictories")
                .withKeyDefinitions([
                  new SelectAttributeDefinitionBuilder()
                    .withTitle("Defender")
                    .withModelSelector("defender.name")
                    .withDeltaSelector("defender")
                    .withItemsFromObservable(knownGymLeaderObservable)
                    .withFilterable(true)
                    .build(),
                  new SelectAttributeDefinitionBuilder()
                    .withTitle("Gym")
                    .withModelSelector("gym.name")
                    .withDeltaSelector("gym")
                    .withItemsFromObservable(gymObservable)
                    .withFilterable(true)
                    .build(),
                  new SelectAttributeDefinitionBuilder()
                    .withTitle("League")
                    .withModelSelector("league.name")
                    .withDeltaSelector("league")
                    .withItemsFromObservable(gymLeagueObservable)
                    .withFilterable(true)
                    .build()
                ])
                .withFieldDefinitions([
                  new DateAttributeDefinitionBuilder()
                    .withTitle("Date")
                    .build(),
                  new StringAttributeDefinitionBuilder()
                    .withTitle("Log URL")
                    .withModelSelector("logUrl")
                    .withDeltaSelector("logUrl")
                    .withMaxLength(2083)
                    .build()
                ])
                .build(),
              new NestedAttributeDefinitionBuilder(GymVictory, GymVictoryDelta)
                .withTitle("Elite Four Victories")
                .withKeyDefinitions([
                  new SelectAttributeDefinitionBuilder()
                    .withTitle("Defender")
                    .withModelSelector("defender.name")
                    .withDeltaSelector("defender")
                    .withItemsFromObservable(knownEliteFourMemberObservable)
                    .withFilterable(true)
                    .build()
                ])
                .withFieldDefinitions([
                  new DateAttributeDefinitionBuilder()
                    .withTitle("Date")
                    .build(),
                  new StringAttributeDefinitionBuilder()
                    .withTitle("Log URL")
                    .withModelSelector("logUrl")
                    .withDeltaSelector("logUrl")
                    .withMaxLength(2083)
                    .build()
                ])
                .build(),
              new NestedAttributeDefinitionBuilder(GymVictory, GymVictoryDelta)
                .withTitle("Champion Victories")
                .withKeyDefinitions([
                  new SelectAttributeDefinitionBuilder()
                    .withTitle("Defender")
                    .withModelSelector("defender.name")
                    .withDeltaSelector("defender")
                    .withItemsFromObservable(knownChampionObservable)
                    .withFilterable(true)
                    .build()
                ])
                .withFieldDefinitions([
                  new DateAttributeDefinitionBuilder()
                    .withTitle("Date")
                    .build(),
                  new StringAttributeDefinitionBuilder()
                    .withTitle("Log URL")
                    .withModelSelector("logUrl")
                    .withDeltaSelector("logUrl")
                    .withMaxLength(2083)
                    .build()
                ])
                .build(),
              new NestedAttributeDefinitionBuilder(LegendaryProgress, LegendaryProgressDelta)
                .withTitle("Legendary Progress")
                .withKeyDefinitions([
                  new SelectAttributeDefinitionBuilder() 
                    .withTitle("Section")
                    .withModelSelector("section.name")
                    .withItemsFromObservable(sectionObservable)
                    .withFilterable(true)
                    .build(),
                  new StringAttributeDefinitionBuilder()
                    .withTitle("Log URL")
                    .withModelSelector("logUrl")
                    .withDeltaSelector("logUrl")
                    .withMaxLength(2083)
                    .build()
                ])
                .withFieldDefinitions([
                  new NumberAttributeDefinitionBuilder()
                    .withTitle("Value")
                    .withMinValue(1)
                    .build(),
                  new DateAttributeDefinitionBuilder()
                    .withTitle("Date")
                    .build()
                ])
                .build()
            ]
        );
    }
}