import { UrpgObjectModel } from "../UrpgObjectModel";
import { RolePermissionDelta } from "./RolePermissionDelta";

export class RoleDelta extends UrpgObjectModel {
    permissions:RolePermissionDelta[] = [];
}