import { formatDate } from "@angular/common";
import { Type } from "class-transformer";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../ObjectModel";
import { EliteFour } from "./EliteFour";

export class EliteFourMemberRecord extends UrpgObjectModel {
    wins:number;
    losses:number;
    draws:number;

    @Type(() => EliteFour)
    slot:EliteFour;

    @Type(() => Member)
    owner:Member;

    @Type(() => Date)
    openDate:Date;

    getDisplayName() {
        const format = 'yyyy-MM-dd';
        const locale = 'en-US';
        const timezone = 'UTC';
        const formattedDate = formatDate(this.openDate, format, locale, timezone);

        return this.owner.name + ", " + this.slot.name + ", " + formattedDate;
    }
}