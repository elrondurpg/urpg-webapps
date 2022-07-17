import { Type } from "class-transformer";
import { Gym } from "../gym/Gym";
import { GymLeague } from "../gym/GymLeague";
import { KnownGymLeader } from "../gym/KnownGymLeader";
import { Member } from "../member/Member";
import { UrpgObjectModel } from "../ObjectModel";

export class GymVictory extends UrpgObjectModel {
    logUrl:string;

    @Type(() => KnownGymLeader) 
    defender:KnownGymLeader;

    @Type(() => Member)
    challenger:Member;

    @Type(() => Gym) 
    gym:Gym;

    @Type(() => GymLeague)
    league:GymLeague;

    @Type(() => Date)
    date:Date;
}