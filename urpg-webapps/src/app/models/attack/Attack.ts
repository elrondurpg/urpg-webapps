import { AttackTargetType } from './AttackTargetType';
import { Item } from '../item/Item';
import { Type } from '../species/Type';
import { RseContestMoveType } from '../contest/RSEContestMoveType';
import { OrasContestMoveType } from '../contest/ORASContestMoveType';
import { ContestAttribute } from '../contest/ContestAttribute';
import { SpeciesAttack } from '../species/SpeciesAttack';
import { Type as Clazz } from 'class-transformer';
import { ContestCombo } from '../contest/ContestCombo';
import { UrpgObjectModel } from '../ObjectModel';

export class Attack extends UrpgObjectModel {
    description:string;
    power:number;
    accuracy:number;
    pp:number;
    contact:boolean;
    snatch:boolean;
    substitute:boolean;
    sheerForce:boolean;
    magicCoat:boolean;

    @Clazz(() => Item)
    tm:Item;

    @Clazz(() => Type)
    type:Type;

    @Clazz(() => UrpgObjectModel)
    category:UrpgObjectModel;

    @Clazz(() => AttackTargetType)
    target:AttackTargetType;

    @Clazz(() => RseContestMoveType)
    rseContestMoveType:RseContestMoveType;

    @Clazz(() => ContestAttribute)
    rseContestAttribute:ContestAttribute;

    @Clazz(() => OrasContestMoveType)
    orasContestMoveType:OrasContestMoveType;

    @Clazz(() => ContestAttribute)
    orasContestAttribute:ContestAttribute;

    @Clazz(() => SpeciesAttack)
    pokemon:SpeciesAttack[];

    @Clazz(() => ContestCombo)
    contestCombos:ContestCombo[];
}