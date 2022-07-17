import { UrpgObjectModel } from "../ObjectModel";

export class EarnedRibbonDelta extends UrpgObjectModel {
    ignoreProperties = ["dbid", "rank", "attribute", "contestType" ];
    rank:string;
    attribute:string;
    contestType:string;
    url:string;
    spent:boolean;
}