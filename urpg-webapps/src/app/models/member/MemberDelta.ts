import { UrpgObjectModel } from "../ObjectModel";
import { ChampionVictory } from "../stats/ChampionVictory";
import { EliteFourVictory } from "../stats/EliteFourVictory";
import { GymVictory } from "../stats/GymVictory";
import { LegendaryProgressDelta } from "../stats/LegendaryProgressDelta";
import { OwnedItemDelta } from "../stats/OwnedItemDelta";
import { MemberRoleDelta } from "./MemberRoleDelta";

export class MemberDelta extends UrpgObjectModel {
    discordId:string;
    name:string;
    money:number;
    wins:number;
    losses:number;
    draws:number;
    joinDate:Date;
    roles:MemberRoleDelta[] = [];
    legendaryProgress:LegendaryProgressDelta[] = [];
    items:OwnedItemDelta[] = [];
    bot:boolean;
    gymVictories:GymVictory[];
    eliteFourVictories:EliteFourVictory[];
    championVictories:ChampionVictory[];
}