import { ObjectDelta } from "../ObjectDelta";
import { RolePermissionDelta } from "./RolePermissionDelta";

export class RoleDelta extends ObjectDelta {
    name:string;
    permissions:RolePermissionDelta[] = [];
}