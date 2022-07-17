import { Type } from "class-transformer";
import { KnownChampion } from "../gym/KnownChampion";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../ObjectModel";

export class ChampionVictory extends UrpgObjectModel {
    logUrl:string;

    @Type(() => KnownChampion)
    defender:KnownChampion;

    @Type(() => Member)
    challenger:Member;

    @Type(() => Date)
    date:Date;
}