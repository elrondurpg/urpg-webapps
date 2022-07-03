import { Type } from "class-transformer";

export class ChampionVictoryDelta {
    defender:string;
    logUrl:string;

    @Type(() => Date)
    date:Date;
}