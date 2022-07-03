import { ObjectDelta } from "../ObjectDelta";

export class GymOwnershipTermDelta extends ObjectDelta {
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