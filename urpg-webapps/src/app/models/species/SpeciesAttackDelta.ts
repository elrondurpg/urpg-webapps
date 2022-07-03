import { ObjectDelta } from "../ObjectDelta";

export class SpeciesAttackDelta extends ObjectDelta {
    ignoreProperties = [ "name" ];
    name:string;
    method:string;
    generation:number;
    delete:boolean;
}