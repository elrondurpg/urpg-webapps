import { ObjectDelta } from "../ObjectDelta";
import { EarnedRibbonDelta } from "./EarnedRibbonDelta";
import { OwnedExtraMoveDelta } from "./OwnedExtraMoveDelta";
import { OwnedHiddenAbilityDelta } from "./OwnedHiddenAbilityDelta";

export class OwnedPokemonDelta extends ObjectDelta {
    trainer:string;
    species:string;
    gender:string;
    nature:string;
    exp:number;
    obtained:string;
    obtainedLink:string;
    nickname:string;
    hiddenPowerType:string;
    hiddenPowerLink:string;
    ownedExtraMoves:OwnedExtraMoveDelta[];
    ownedHiddenAbilities:OwnedHiddenAbilityDelta[];
    earnedRibbons:EarnedRibbonDelta[];
    job:boolean;
    box:boolean;
    uft:boolean;
    rental:boolean;
}