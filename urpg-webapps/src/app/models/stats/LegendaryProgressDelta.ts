import { UrpgObjectModel } from "../ObjectModel";

export class LegendaryProgressDelta extends UrpgObjectModel {
    ignoreProperties = [ "section", "logUrl" ];
    section:string;
    logUrl:string;
    date:Date;
    value:number;
}