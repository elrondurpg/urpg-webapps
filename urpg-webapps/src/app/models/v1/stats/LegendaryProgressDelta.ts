import { UrpgObjectModel } from "../UrpgObjectModel";

export class LegendaryProgressDelta extends UrpgObjectModel {
    ignoreProperties = [ "section", "logUrl" ];
    section:string;
    logUrl:string;
    date:Date;
    value:number;
}