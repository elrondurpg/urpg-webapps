import { UrpgObjectModel } from "../UrpgObjectModel";

export class OwnedHiddenAbilityDelta extends UrpgObjectModel {
    ignoreProperties = ["ability"];
    ability:string;
}