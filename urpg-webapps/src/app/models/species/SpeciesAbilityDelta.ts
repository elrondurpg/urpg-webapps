import { ObjectDelta } from "../ObjectDelta";

export class SpeciesAbilityDelta extends ObjectDelta {
    ignoreProperties = [ "name" ];
    name:string;
    hidden:boolean;
    delete:boolean;
}