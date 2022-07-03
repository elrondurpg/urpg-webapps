import { ObjectDelta } from "../ObjectDelta";

export class EarnedRibbonDelta extends ObjectDelta {
    dbid:number;
    rank:string;
    attribute:string;
    url:string;
    spent:boolean;
    delete:boolean;
}