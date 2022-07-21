import { AttackTargetType } from './AttackTargetType';
import { Item } from '../item/Item';
import { Type } from '../species/Type';
import { SpeciesAttack } from '../species/SpeciesAttack';
import { Type as Clazz } from 'class-transformer';
import { ContestCombo } from '../contest/ContestCombo';
import { UrpgObjectModel } from '../UrpgObjectModel';
import { ContestMoveType } from '../contest/ContestMoveType';

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

    @Clazz(() => ContestMoveType)
    rseContestMoveType:ContestMoveType;

    @Clazz(() => UrpgObjectModel)
    rseContestAttribute:UrpgObjectModel;

    @Clazz(() => ContestMoveType)
    orasContestMoveType:ContestMoveType;

    @Clazz(() => UrpgObjectModel)
    orasContestAttribute:UrpgObjectModel;

    @Clazz(() => SpeciesAttack)
    pokemon:SpeciesAttack[];

    @Clazz(() => ContestCombo)
    contestCombos:ContestCombo[];
}