import { formatDate } from "@angular/common";
import { Type } from "class-transformer";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../UrpgObjectModel";
import { Champion } from "./Champion";

export class ChampionRecord extends UrpgObjectModel {
    wins:number;
    losses:number;
    draws:number;

    @Type(() => Date)
    openDate:Date;

    @Type(() => Champion)
    slot:Champion;

    @Type(() => Member)
    owner:Member;

    getDisplayName() {
        const format = 'yyyy-MM-dd';
        const locale = 'en-US';
        const timezone = 'UTC';
        const formattedDate = formatDate(this.openDate, format, locale, timezone);

        return this.owner.name + ", " + this.slot.name + ", " + formattedDate;
    }
}