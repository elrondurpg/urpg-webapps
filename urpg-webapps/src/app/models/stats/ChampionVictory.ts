import { Type } from "class-transformer";
import { KnownChampion } from "../gym/KnownChampion";
import { Member } from "../member/Member";

export class ChampionVictory {
    logUrl:string;

    @Type(() => KnownChampion)
    defender:KnownChampion;

    @Type(() => Member)
    challenger:Member;

    @Type(() => Date)
    date:Date;
}