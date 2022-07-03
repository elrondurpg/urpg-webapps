import { Type } from "class-transformer";
import { KnownEliteFourMember } from "../gym/KnownEliteFourMember";
import { Member } from "../member/Member";

export class EliteFourVictory {
    logUrl:string;

    @Type(() => KnownEliteFourMember)
    defender:KnownEliteFourMember;

    @Type(() => Member)
    challenger:Member;

    @Type(() => Date)
    date:Date;
}