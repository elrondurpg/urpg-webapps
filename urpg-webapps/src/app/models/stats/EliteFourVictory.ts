import { Type } from "class-transformer";
import { KnownEliteFourMember } from "../gym/KnownEliteFourMember";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../ObjectModel";

export class EliteFourVictory extends UrpgObjectModel {
    logUrl:string;

    @Type(() => KnownEliteFourMember)
    defender:KnownEliteFourMember;

    @Type(() => Member)
    challenger:Member;

    @Type(() => Date)
    date:Date;
}