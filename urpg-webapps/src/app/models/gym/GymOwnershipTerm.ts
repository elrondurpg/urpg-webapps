import { Type } from "class-transformer";
import { Item } from "../item/Item";
import { Member } from "../member/Member";
import { Gym } from "./Gym";
import { GymLeague } from "./GymLeague";

export class GymOwnershipTerm {
    dbid:number;
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
}