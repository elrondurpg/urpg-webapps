import { ObjectDelta } from "../ObjectDelta";

export class LegendaryProgressDelta extends ObjectDelta {
    dbid:number;
    section:string;
    logUrl:string;
    date:Date;
    value:number;
    delete:boolean;
}