import { formatDate } from "@angular/common";
import { Type } from "class-transformer";
import { Item } from "../item/Item";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../UrpgObjectModel";
import { Gym } from "./Gym";
import { GymLeague } from "./GymLeague";

export class GymLeaderRecord extends UrpgObjectModel {
    wins:number;
    losses:number;
    draws:number;

    @Type(() => Gym)
    gym:Gym;

    @Type(() => Member) 
    owner:Member;

    @Type(() => GymLeague) 
    league:GymLeague;

    @Type(() => Date) 
    openDate:Date;

    @Type(() => Item) 
    tm:Item;

    getDisplayName() {
        const format = 'yyyy-MM-dd';
        const locale = 'en-US';
        const timezone = 'UTC';
        const formattedDate = formatDate(this.openDate, format, locale, timezone);

        return this.owner.name + ", " + this.gym.name + ", " + formattedDate;
    }
}