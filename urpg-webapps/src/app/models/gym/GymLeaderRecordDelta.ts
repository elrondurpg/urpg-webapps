import { UrpgObjectModel } from "../ObjectModel";

export class GymLeaderRecordDelta extends UrpgObjectModel {
    openDate:Date;
    wins:number;
    losses:number;
    draws:number;
    tm:string;
    owner:string;
    league:string;
    gym:string;
    becomeCurrentOwner:boolean;
}