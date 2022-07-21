import { UrpgObjectModel } from "../UrpgObjectModel";

export class EliteFourMemberRecordDelta extends UrpgObjectModel {
    openDate:Date;
    wins:number;
    losses:number;
    draws:number;
    owner:string;
    slot:string;
    becomeCurrentOwner:boolean;
}