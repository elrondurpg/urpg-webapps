import { UrpgObjectModel } from "../UrpgObjectModel";

export class ContestComboDelta extends UrpgObjectModel {
    ignoreProperties:string[] = [ "secondAttack", "generation" ];

    secondAttack:string;
    generation:string;
    overpowered:boolean;
}