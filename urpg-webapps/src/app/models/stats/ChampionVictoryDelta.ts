import { Type } from "class-transformer";
import { UrpgObjectModel } from "../ObjectModel";

export class ChampionVictoryDelta extends UrpgObjectModel {
    ignoreProperties = ["defender"];
    defender:string;
    logUrl:string;

    @Type(() => Date)
    date:Date;
}