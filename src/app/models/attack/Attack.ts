import { AdvContestMoveType } from '../contest/AdvContestMoveType';
import { AttackCategory } from './AttackCategory';
import { AttackTargetType } from './AttackTargetType';
import { Item } from '../item/Item';
import { Type } from '../species/Type';
import { RSEContestMoveType } from '../contest/RSEContestMoveType';
import { DPPContestMoveType } from '../contest/DPPContestMoveType';
import { ORASContestMoveType } from '../contest/ORASContestMoveType';
import { ContestAttribute } from '../contest/ContestAttribute';
import { SpeciesAttack } from '../species/SpeciesAttack';
import { Type as Clazz } from 'class-transformer';

export class Attack {
    dbid:number;
    name:string;
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

    @Clazz(() => AttackCategory)
    category:AttackCategory;

    @Clazz(() => AttackTargetType)
    target:AttackTargetType;

    @Clazz(() => RSEContestMoveType)
    rseContestMoveType:RSEContestMoveType;

    @Clazz(() => ContestAttribute)
    rseContestAttribute:ContestAttribute;

    @Clazz(() => DPPContestMoveType)
    dppContestMoveType:DPPContestMoveType;

    @Clazz(() => ContestAttribute)
    dppContestAttribute:ContestAttribute;

    @Clazz(() => ORASContestMoveType)
    orasContestMoveType:ORASContestMoveType;

    @Clazz(() => ContestAttribute)
    orasContestAttribute:ContestAttribute;

    @Clazz(() => AdvContestMoveType)
    advContestMoveType:AdvContestMoveType;

    @Clazz(() => ContestAttribute)
    advContestAttribute:ContestAttribute;

    @Clazz(() => SpeciesAttack)
    pokemon:SpeciesAttack[];
}