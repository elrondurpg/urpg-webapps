import { Type } from "class-transformer";
import { Gym } from "../gym/Gym";
import { GymLeague } from "../gym/GymLeague";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../UrpgObjectModel";

export class GymVictory extends UrpgObjectModel {
    logUrl:string;

    @Type(() => UrpgObjectModel) 
    defender:UrpgObjectModel;

    @Type(() => Member)
    challenger:Member;

    @Type(() => Gym) 
    gym:Gym;

    @Type(() => GymLeague)
    league:GymLeague;

    @Type(() => Date)
    date:Date;
}