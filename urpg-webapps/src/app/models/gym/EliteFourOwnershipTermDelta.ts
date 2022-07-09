import { UrpgObjectModel } from "../ObjectModel";

export class EliteFourOwnershipTermDelta extends UrpgObjectModel {
    openDate:Date;
    wins:number;
    losses:number;
    draws:number;
    owner:string;
    slot:string;
    becomeCurrentOwner:boolean;
}