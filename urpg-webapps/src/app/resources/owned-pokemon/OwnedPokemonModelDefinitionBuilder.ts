import { Observable } from "rxjs";
import { GeneralConstants } from "src/app/constants/GeneralConstants";
import { Ability } from "src/app/models/ability/Ability";
import { Attack } from "src/app/models/attack/Attack";
import { EarnedRibbon } from "src/app/models/stats/EarnedRibbon";
import { EarnedRibbonDelta } from "src/app/models/stats/EarnedRibbonDelta";
import { OwnedExtraMoveDelta } from "src/app/models/stats/OwnedExtraMoveDelta";
import { OwnedHiddenAbilityDelta } from "src/app/models/stats/OwnedHiddenAbilityDelta";
import { environment } from "src/environments/environment";
import { BooleanAttributeDefinitionBuilder, ModelDefinition, NestedAttributeDefinitionBuilder, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from "zydeco-ts";

export class OwnedPokemonModelDefinitionBuilder {
    static buildFirstPart(
        contestAttributeObservable:Observable<any>,
        contestRankObservable:Observable<any>,
        contestTypeObservable:Observable<any>,
        memberObservable:Observable<any>,
        natureObservable:Observable<any>,
        obtainedObservable:Observable<any>,
        speciesObservable:Observable<any>,
        typeObservable:Observable<any>
    ) {
        return [
            new SelectAttributeDefinitionBuilder()
                .withTitle("Owner")
                .withItemsFromObservable(memberObservable)
                .withModelSelector("trainer.name")
                .withDeltaSelector("trainer")
                .withRequired(true)
                .withUrlBase("/urpg-webapps/resources/members/")
                .build(),
            new StringAttributeDefinitionBuilder() 
                .withTitle("Nickname")
                .withMaxLength(34)
                .build(),
            new SelectAttributeDefinitionBuilder() 
                .withTitle("Species")
                .withItemsFromObservable(speciesObservable)
                .withModelSelector("species.name")
                .withDeltaSelector("species")
                .withRequired(true)
                .withImmutable(true)
                .build(),
            new SelectAttributeDefinitionBuilder() 
                .withTitle(GeneralConstants.GENDER_ATTRIBUTE_TITLE)
                .withItems(["M", "F", "G"])
                .withRequired(true)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Obtained")
                .withItemsFromObservable(obtainedObservable)
                .withModelSelector("obtained.name")
                .withDeltaSelector("obtained")
                .withRequired(true)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Obtained Link")
                .withMaxLength(2083)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Nature")
                .withItemsFromObservable(natureObservable)
                .withModelSelector("nature.name")
                .withDeltaSelector("nature")
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("EXP")
                .withModelSelector("exp")
                .withDeltaSelector("exp")
                .withMinValue(0)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Hidden Power Type")
                .withItemsFromObservable(typeObservable)
                .withModelSelector("hiddenPowerType.name")
                .withDeltaSelector("hiddenPowerType")
                .withDisallowedItems(["NORMAL", "FAIRY"])
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Hidden Power Link")
                .withMaxLength(2083)
                .build(),
            new BooleanAttributeDefinitionBuilder() 
                .withTitle("On a job?")
                .withModelSelector("job")
                .withDeltaSelector("job")
                .build(),
            new BooleanAttributeDefinitionBuilder() 
                .withTitle("In my battle box?")
                .withModelSelector("box")
                .withDeltaSelector("box")
                .build(),
            new BooleanAttributeDefinitionBuilder() 
                .withTitle("Up for trade?")
                .withModelSelector("uft")
                .withDeltaSelector("uft")
                .build(),
            new BooleanAttributeDefinitionBuilder() 
                .withTitle("Is a rental?")
                .withModelSelector("rental")
                .withDeltaSelector("rental")
                .build(),
            new NestedAttributeDefinitionBuilder(EarnedRibbon, EarnedRibbonDelta)
                .withTitle("Ribbons")
                .withModelSelector("earnedRibbons")
                .withDeltaSelector("earnedRibbons")
                .withKeyDefinitions([
                    new StringAttributeDefinitionBuilder()
                        .withTitle("Log URL")
                        .withModelSelector("logUrl")
                        .withDeltaSelector("logUrl")
                        .withMaxLength(2083)
                        .build(),
                    new SelectAttributeDefinitionBuilder() 
                        .withTitle("Generation")
                        .withModelSelector("generation.name")
                        .withItemsFromObservable(contestTypeObservable)
                        .withFilterable(true)
                        .build(),
                    new SelectAttributeDefinitionBuilder() 
                        .withTitle("Rank")
                        .withModelSelector("rank.name")
                        .withItemsFromObservable(contestRankObservable)
                        .withFilterable(true)
                        .build(),
                    new SelectAttributeDefinitionBuilder() 
                        .withTitle("Attribute")
                        .withModelSelector("attribute.name")
                        .withItemsFromObservable(contestAttributeObservable)
                        .withFilterable(true)
                        .build(),
                ])
                .withFieldDefinitions([
                    new NumberAttributeDefinitionBuilder()
                        .withTitle("Quantity")
                        .withMinValue(1)
                        .withMaxValue(999999)
                        .withRequired(true)
                        .build(),
                    new NumberAttributeDefinitionBuilder()
                        .withTitle("Spent")
                        .withMinValue(0)
                        .withMaxValue(999999)
                        .build(),
                ])
                .build()
        ];
    }

    static buildSecondPart(
        abilityObservable:Observable<any>,
        attackObservable:Observable<any>
    ) {
        return [
            new NestedAttributeDefinitionBuilder(Attack, OwnedExtraMoveDelta)
                .withTitle(GeneralConstants.OWNED_EXTRA_MOVES_TITLE)
                .withModelSelector("ownedExtraMoves")
                .withDeltaSelector("ownedExtraMoves")
                .withKeyDefinitions([
                    new SelectAttributeDefinitionBuilder() 
                        .withTitle("Name")
                        .withDeltaSelector("attack")
                        .withItemsFromObservable(attackObservable)
                        .withFilterable(true)
                        .build()
                ])
                .build(),
            new NestedAttributeDefinitionBuilder(Ability, OwnedHiddenAbilityDelta)
                .withTitle(GeneralConstants.OWNED_HIDDEN_ABILITIES_TITLE)
                .withModelSelector("ownedHiddenAbilities")
                .withDeltaSelector("ownedHiddenAbilities")
                .withKeyDefinitions([
                    new SelectAttributeDefinitionBuilder() 
                        .withTitle("Name")
                        .withDeltaSelector("ability")
                        .withItemsFromObservable(abilityObservable)
                        .withFilterable(true)
                        .build()
                ])
                .build()
        ];
    }
}