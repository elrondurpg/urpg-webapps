import { Ability } from '../ability/Ability';
import { Attack } from '../attack/Attack';
import { Member } from '../member/Member';
import { Species } from '../species/Species';
import { Type } from '../species/Type';
import { EarnedRibbon } from './EarnedRibbon';
import { Type as Clazz } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';
import { WishlistAbility } from './WishlistAbility';
import { WishlistMove } from './WishlistMove';

export class OwnedPokemon extends UrpgObjectModel {
    job:boolean;
    box:boolean;
    uft:boolean;
    gender:string;
    exp:number;
    obtainedLink:string;
    nickname:string;
    hiddenPowerLink:string;
    rental:boolean = false;

    @Clazz(() => Member)
    trainer:Member;

    @Clazz(() => Species)
    species:Species;

    @Clazz(() => UrpgObjectModel)
    nature:UrpgObjectModel;

    @Clazz(() => UrpgObjectModel)
    obtained:UrpgObjectModel;

    @Clazz(() => Type)
    hiddenPowerType:Type;

    @Clazz(() => Ability)
    ownedHiddenAbilities:Ability[] = [];

    @Clazz(() => Attack)
    ownedExtraMoves:Attack[] = [];

    @Clazz(() => EarnedRibbon)
    earnedRibbons:EarnedRibbon[] = [];

    @Clazz(() => WishlistAbility)
    wishlistAbilities:WishlistAbility[] = [];

    @Clazz(() => WishlistMove)
    wishlistMoves:WishlistMove[] = [];

    override getDisplayName(): string {
        let displayName = '';
        if (this.nickname != null && this.nickname.trim() != '') {
            displayName += this.nickname + " the ";
        }
        displayName += this.species.name + " (" + this.gender + ")";
        return displayName;
    }
}