import { ContestComboDelta } from "../contest/ContestComboDelta";
import { ObjectDelta } from "../ObjectDelta";
import { Attack } from "./Attack";

export class AttackDelta extends ObjectDelta {
    name:string;
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

    constructor(attack:Attack = undefined) {
        super();
        if (attack !== undefined) {
            attack.contestCombos.forEach(combo => {
                this.contestCombos.push(new ContestComboDelta(combo));
            });
        }
    }
}