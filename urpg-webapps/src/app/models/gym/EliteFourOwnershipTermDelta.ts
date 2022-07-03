import { ObjectDelta } from "../ObjectDelta";

export class EliteFourOwnershipTermDelta extends ObjectDelta {
    openDate:Date;
    wins:number;
    losses:number;
    draws:number;
    owner:string;
    slot:string;
    becomeCurrentOwner:boolean;
}