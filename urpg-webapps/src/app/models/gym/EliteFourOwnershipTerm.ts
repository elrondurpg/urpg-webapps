import { Type } from "class-transformer";
import { Member } from "../member/Member";
import { EliteFour } from "./EliteFour";

export class EliteFourOwnershipTerm {
    dbid:number;
    wins:number;
    losses:number;
    draws:number;

    @Type(() => EliteFour)
    slot:EliteFour;

    @Type(() => Member)
    owner:Member;

    @Type(() => Date)
    openDate:Date;
}