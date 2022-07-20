import { Observable } from "rxjs";
import { GeneralConstants } from "src/app/constants/GeneralConstants";
import { CosmeticForm } from "src/app/models/species/CosmeticForm";
import { CosmeticFormDelta } from "src/app/models/species/CosmeticFormDelta";
import { SpeciesAbility } from "src/app/models/species/SpeciesAbility";
import { SpeciesAbilityDelta } from "src/app/models/species/SpeciesAbilityDelta";
import { SpeciesAttack } from "src/app/models/species/SpeciesAttack";
import { SpeciesAttackDelta } from "src/app/models/species/SpeciesAttackDelta";
import { BooleanAttributeDefinitionBuilder, ModelDefinition, NestedAttributeDefinitionBuilder, NumberAttributeDefinitionBuilder, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from "zydeco-ts";

export class SpeciesModelDefinitionBuilder {
    static build(
        abilityObservable:Observable<any>,
        artRankObservable:Observable<any>,
        attackObservable:Observable<any>,
        parkLocationObservable:Observable<any>,
        parkRankObservable:Observable<any>,
        speciesObservable:Observable<any>,
        storyRankObservable:Observable<any>,
        typeObservable:Observable<any>
    ) {
        return new ModelDefinition([
            new NumberAttributeDefinitionBuilder()
                .withTitle("Pokedex Number")
                .withModelSelector("dexno")
                .withDeltaSelector("dexno")
                .withMinValue(1)
                .withRequired(true)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Name")
                .withMinLength(3)
                .withMaxLength(21)
                .withRequired(true)
                .withInstructions(GeneralConstants.SPECIES_NAME_INSTRUCTIONS)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Display Name")
                .withMinLength(3)
                .withMaxLength(20)
                .withInstructions(GeneralConstants.SPECIES_DISPLAY_NAME_INSTRUCTIONS)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Form Name")
                .withMinLength(3)
                .withMaxLength(20)
                .withInstructions(GeneralConstants.SPECIES_FORM_NAME_INSTRUCTIONS)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Type 1")
                .withModelSelector("type1.name")
                .withItemsFromObservable(typeObservable)
                .withRequired(true)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Type 2")
                .withModelSelector("type2.name")
                .withItemsFromObservable(typeObservable)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Classification")
                .withMinLength(3)
                .withMaxLength(20)
                .withInstructions(GeneralConstants.SPECIES_CLASSIFICATION_INSTRUCTIONS)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("HP")
                .withMinValue(0)
                .withMaxValue(1000)
                .withModelSelector("hp")
                .withDeltaSelector("hp")
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Attack")
                .withMinValue(0)
                .withMaxValue(1000)
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Defense")
                .withMinValue(0)
                .withMaxValue(1000)
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Special Attack")
                .withMinValue(0)
                .withMaxValue(1000)
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Special Defense")
                .withMinValue(0)
                .withMaxValue(1000)
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Speed")
                .withMinValue(0)
                .withMaxValue(1000)
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Height in meters")
                .withModelSelector("height")
                .withDeltaSelector("height")
                .withMinValue(.01)
                .withMaxValue(1000000)
                .withStep(.1)
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Weight in kilograms")
                .withModelSelector("weight")
                .withDeltaSelector("weight")
                .withMinValue(.01)
                .withMaxValue(1000000)
                .withStep(.1)
                .withRequired(true)
                .build(),
            new BooleanAttributeDefinitionBuilder()
                .withTitle("Can be male?")
                .withModelSelector("maleAllowed")
                .withDeltaSelector("maleAllowed")
                .withRequired(true)
                .build(),
            new BooleanAttributeDefinitionBuilder()
                .withTitle("Can be female?")
                .withModelSelector("femaleAllowed")
                .withDeltaSelector("femaleAllowed")
                .withRequired(true)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Pokemart price")
                .withModelSelector("pokemart")
                .withDeltaSelector("pokemart")
                .withMinValue(0)
                .withMaxValue(20000)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Berry Store price")
                .withModelSelector("contestCredits")
                .withDeltaSelector("contestCredits")
                .withMinValue(0)
                .withMaxValue(100000)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Story Rank")
                .withModelSelector("storyRank.name")
                .withItemsFromObservable(storyRankObservable)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Art Rank")
                .withModelSelector("artRank.name")
                .withItemsFromObservable(artRankObservable)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Park Rank")
                .withModelSelector("parkRank.name")
                .withItemsFromObservable(parkRankObservable)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Park Location")
                .withModelSelector("parkLocation.name")
                .withItemsFromObservable(parkLocationObservable)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Altered Form Method")
                .withMinLength(0)
                .withMaxLength(100)
                .withInstructions(GeneralConstants.SPECIES_ALTERED_FORM_INSTRUCTIONS)
                .build(),
            new BooleanAttributeDefinitionBuilder()
                .withTitle("Battle Only?")
                .withModelSelector("battleOnly")
                .withDeltaSelector("battleOnly")
                .withInstructions(GeneralConstants.SPECIES_BATTLE_ONLY_INSTRUCTIONS)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Pre-Evolution")
                .withModelSelector("preEvolution.name")
                .withDeltaSelector("preEvolution")
                .withItemsFromObservable(speciesObservable)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Evolution Method")
                .withMinLength(3)
                .withMaxLength(50)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Evolution Exp Requirement")
                .withMinValue(5)
                .withMaxValue(7)
                .build(),
            new SelectAttributeDefinitionBuilder()
                .withTitle("Pre-Mega")
                .withModelSelector("preMega.name")
                .withDeltaSelector("preMega")
                .withItemsFromObservable(speciesObservable)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Mega Stone")
                .withMinLength(3)
                .withMaxLength(7)
                .withInstructions(GeneralConstants.SPECIES_ALTERED_FORM_INSTRUCTIONS)
                .build(),
            new StringAttributeDefinitionBuilder()
                .withTitle("Mega Suffix")
                .withMinLength(3)
                .withMaxLength(20)
                .withInstructions(GeneralConstants.SPECIES_MEGA_SUFFIX_INSTRUCTIONS)
                .build(),
            new NumberAttributeDefinitionBuilder()
                .withTitle("Legendary Tier")
                .withMinValue(0)
                .withMaxValue(2)
                .build(),
            new NestedAttributeDefinitionBuilder(SpeciesAttack, SpeciesAttackDelta)
                .withTitle("Moves")
                .withModelSelector("attacks")
                .withDeltaSelector("attacks")
                .withKeyDefinitions([
                    new SelectAttributeDefinitionBuilder()
                        .withTitle("Attack")
                        .withModelSelector("attack.name")
                        .withDeltaSelector("name")
                        .withFilterable(true)
                        .withItemsFromObservable(attackObservable)
                        .build()
                ])
                .withFieldDefinitions([
                    new SelectAttributeDefinitionBuilder()
                        .withTitle("Method")
                        .withItems(GeneralConstants.MOVE_METHODS)
                        .build(),
                    new NumberAttributeDefinitionBuilder()
                        .withTitle("Generation")
                        .withMinValue(1)
                        .withMaxValue(GeneralConstants.CURRENT_GENERATION)
                        .build()
                ])
                .withImportable(true)
                .build(),
            new NestedAttributeDefinitionBuilder(SpeciesAbility, SpeciesAbilityDelta)
                .withTitle("Abilities")
                .withKeyDefinitions([
                    new SelectAttributeDefinitionBuilder()
                        .withTitle("Ability")
                        .withModelSelector("ability.name")
                        .withDeltaSelector("name")
                        .withFilterable(true)
                        .withItemsFromObservable(abilityObservable)
                        .build()
                ])
                .withFieldDefinitions([
                    new BooleanAttributeDefinitionBuilder()
                        .withTitle("Hidden")
                        .build()
                ])
                .withImportable(true)
                .build(),
            new NestedAttributeDefinitionBuilder(CosmeticForm, CosmeticFormDelta)
                .withTitle("Cosmetic Forms")
                .withKeyDefinitions([
                    new StringAttributeDefinitionBuilder()
                        .withTitle("Name")
                        .withFilterable(true)
                        .withMinLength(3)
                        .withMaxLength(20)
                        .build()
                ])
                .withFieldDefinitions([
                    new StringAttributeDefinitionBuilder()
                        .withTitle("Form Name")
                        .withFilterable(true)
                        .withMinLength(3)
                        .withMaxLength(20)
                        .build()
                ])
                .withImportable(true)
                .build()
        ]);
    }
}