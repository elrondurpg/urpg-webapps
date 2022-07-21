import { UrpgObjectModel } from "../UrpgObjectModel";

export class EarnedRibbonDelta extends UrpgObjectModel {
    ignoreProperties = ["logUrl", "rank", "attribute", "generation" ];
    rank:string;
    attribute:string;
    generation:string;
    logUrl:string;
    spent:number;
    quantity:number;
}