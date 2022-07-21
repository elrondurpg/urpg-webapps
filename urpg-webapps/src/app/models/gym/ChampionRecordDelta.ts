import { UrpgObjectModel } from "../ObjectModel";

export class ChampionRecordDelta extends UrpgObjectModel {
    openDate:Date;
    wins:number;
    losses:number;
    draws:number;
    owner:string;
    slot:string;
    becomeCurrentOwner:boolean;
}