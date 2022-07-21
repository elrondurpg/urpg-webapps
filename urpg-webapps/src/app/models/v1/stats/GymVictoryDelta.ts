import { Type } from "class-transformer";
import { UrpgObjectModel } from "../UrpgObjectModel";

export class GymVictoryDelta extends UrpgObjectModel {
    ignoreProperties = ["defender", "gym", "league"];
    defender:string;
    logUrl:string;
    gym:string;
    league:string;

    @Type(() => Date)
    date:Date;
}