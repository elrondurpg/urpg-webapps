import { UrpgObjectModel } from "../ObjectModel";

export class OwnedHiddenAbilityDelta extends UrpgObjectModel {
    ignoreProperties = ["ability"];
    ability:string;
}