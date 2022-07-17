import { UrpgObjectModel } from "../ObjectModel";
import { ChampionVictory } from "../stats/ChampionVictory";
import { ChampionVictoryDelta } from "../stats/ChampionVictoryDelta";
import { EliteFourVictory } from "../stats/EliteFourVictory";
import { EliteFourVictoryDelta } from "../stats/EliteFourVictoryDelta";
import { GymVictory } from "../stats/GymVictory";
import { GymVictoryDelta } from "../stats/GymVictoryDelta";
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
    gymVictories:GymVictoryDelta[] = [];
    eliteFourVictories:EliteFourVictoryDelta[] = [];
    championVictories:ChampionVictoryDelta[] = [];
}