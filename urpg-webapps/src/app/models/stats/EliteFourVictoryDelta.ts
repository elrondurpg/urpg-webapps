import { Type } from "class-transformer";

export class EliteFourVictoryDelta {
    defender:string;
    logUrl:string;

    @Type(() => Date)
    date:Date;
}