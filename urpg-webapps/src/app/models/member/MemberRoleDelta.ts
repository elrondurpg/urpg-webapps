import { ObjectDelta } from "../ObjectDelta";

export class MemberRoleDelta extends ObjectDelta {
    name:string;
    delete:boolean;
    ignoreProperties = ["name"];
}