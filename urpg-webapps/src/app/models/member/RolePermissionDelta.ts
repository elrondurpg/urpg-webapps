import { ObjectDelta } from "../ObjectDelta";

export class RolePermissionDelta extends ObjectDelta {
    name:string;
    delete:boolean;
    ignoreProperties = ["name"];
}