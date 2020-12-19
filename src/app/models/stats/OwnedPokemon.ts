import { Ability } from '../ability/Ability';
import { Attack } from '../attack/Attack';
import { Nature } from '../general/Nature';
import { Obtained } from '../general/Obtained';
import { Member } from '../member/Member';
import { Species } from '../species/Species';
import { Type } from '../species/Type';
import { EarnedRibbon } from './EarnedRibbon';
import { Type as Clazz } from 'class-transformer';

export class OwnedPokemon {
    dbid:number;
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

    @Clazz(() => Nature)
    nature:Nature;

    @Clazz(() => Obtained)
    obtained:Obtained;

    @Clazz(() => Type)
    hiddenPowerType:Type;

    @Clazz(() => Ability)
    ownedHiddenAbilities:Ability[];

    @Clazz(() => Attack)
    ownedExtraMoves:Attack[];

    @Clazz(() => EarnedRibbon)
    earnedRibbons:EarnedRibbon[];
}