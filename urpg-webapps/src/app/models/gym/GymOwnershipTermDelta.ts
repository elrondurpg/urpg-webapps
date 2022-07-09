import { ObjectDelta } from "../ObjectDelta";
import { UrpgObjectModel } from "../ObjectModel";

export class GymOwnershipTermDelta extends UrpgObjectModel {
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