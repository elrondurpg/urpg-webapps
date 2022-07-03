import { Attack } from "../attack/Attack";
import { ObjectDelta } from "../ObjectDelta";
import { ContestCombo } from "./ContestCombo";

export class ContestComboDelta extends ObjectDelta {
    ignoreProperties:string[] = [ "secondAttack", "contestType" ];

    secondAttack:string;
    contestType:string;
    overpowered:boolean;
    delete:boolean;

    constructor(combo:ContestCombo = undefined) {
        super();
        if (combo !== undefined) {
            this.secondAttack = combo.secondAttack.name;
            this.contestType = combo.contestType;
        }
    }
}