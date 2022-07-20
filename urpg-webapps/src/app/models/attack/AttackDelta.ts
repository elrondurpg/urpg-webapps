import { ContestComboDelta } from "../contest/ContestComboDelta";
import { UrpgObjectModel } from "../ObjectModel";
import { Attack } from "./Attack";

export class AttackDelta extends UrpgObjectModel {
    type:string;
    description:string;
    power:number;
    accuracy:number;
    pp:number;
    category:string;
    target:string;
    contact:boolean;
    snatch:boolean;
    substitute:boolean;
    sheerForce:boolean;
    magicCoat:boolean;
    rseContestAttribute:string;
    rseContestMoveType:string;
    dppContestAttribute:string;
    dppContestMoveType:string;
    orasContestAttribute:string;
    orasContestMoveType:string;
    tm:string;
    contestCombos:ContestComboDelta[] = [];
}