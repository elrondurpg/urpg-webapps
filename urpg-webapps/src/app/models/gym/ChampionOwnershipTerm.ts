import { Type } from "class-transformer";
import { Member } from "../member/Member";
import { Champion } from "./Champion";

export class ChampionOwnershipTerm {
    dbid:number;
    wins:number;
    losses:number;
    draws:number;

    @Type(() => Date)
    openDate:Date;

    @Type(() => Champion)
    slot:Champion;

    @Type(() => Member)
    owner:Member;
}