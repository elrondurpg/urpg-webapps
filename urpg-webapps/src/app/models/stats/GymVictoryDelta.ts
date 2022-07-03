import { Type } from "class-transformer";

export class GymVictoryDelta {
    defender:string;
    logUrl:string;
    gym:string;
    league:string;

    @Type(() => Date)
    date:Date;
}