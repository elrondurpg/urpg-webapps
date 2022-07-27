import { UrpgObjectModel } from "../UrpgObjectModel";
import { EarnedRibbonDelta } from "./EarnedRibbonDelta";
import { OwnedExtraMoveDelta } from "./OwnedExtraMoveDelta";
import { OwnedHiddenAbilityDelta } from "./OwnedHiddenAbilityDelta";
import { WishlistAbilityDelta } from "./WishlistAbilityDelta";
import { WishlistMoveDelta } from "./WishlistMoveDelta";

export class OwnedPokemonDelta extends UrpgObjectModel {
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
    ownedExtraMoves:OwnedExtraMoveDelta[] = [];
    ownedHiddenAbilities:OwnedHiddenAbilityDelta[] = [];
    earnedRibbons:EarnedRibbonDelta[] = [];
    job:boolean;
    box:boolean;
    uft:boolean;
    rental:boolean;
    wishlistAbilities:WishlistAbilityDelta[] = [];
    wishlistMoves:WishlistMoveDelta[] = [];

    override getDisplayName(): string {
        let displayName = '';
        if (this.nickname != null && this.nickname.trim() != '') {
            displayName += this.nickname + " the ";
        }
        displayName += this.species + " (" + this.gender + ")";
        return displayName;
    }
}