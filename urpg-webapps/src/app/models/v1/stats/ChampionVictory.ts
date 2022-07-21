import { Type } from "class-transformer";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../UrpgObjectModel";

export class ChampionVictory extends UrpgObjectModel {
    logUrl:string;

    @Type(() => UrpgObjectModel)
    defender:UrpgObjectModel;

    @Type(() => Member)
    challenger:Member;

    @Type(() => Date)
    date:Date;
}