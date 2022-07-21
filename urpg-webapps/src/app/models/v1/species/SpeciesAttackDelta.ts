import { UrpgObjectModel } from "../UrpgObjectModel";

export class SpeciesAttackDelta extends UrpgObjectModel {
    ignoreProperties = [ "name" ];
    name:string;
    method:string;
    generation:number;
}