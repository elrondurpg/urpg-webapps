import { UrpgObjectModel } from "../ObjectModel";

export class ContestComboDelta extends UrpgObjectModel {
    ignoreProperties:string[] = [ "secondAttack", "generation" ];

    secondAttack:string;
    generation:string;
    overpowered:boolean;
}