import { LegendaryProgress } from '../stats/LegendaryProgress';
import { OwnedItem } from '../stats/OwnedItem';
import { OwnedPokemon } from '../stats/OwnedPokemon';
import { Role } from './Role';
import { Type } from 'class-transformer';
import { GymLeaderRecord } from '../gym/GymLeaderRecord';
import { EliteFourVictory } from '../stats/EliteFourVictory';
import { ChampionVictory } from '../stats/ChampionVictory';
import { GymVictory } from '../stats/GymVictory';
import { EliteFourMemberRecord } from '../gym/EliteFourMemberRecord';
import { ChampionRecord } from '../gym/ChampionRecord';
import { UrpgObjectModel } from '../UrpgObjectModel';

export class Member extends UrpgObjectModel {
    dbid:number;
    discordId:string;
    name:string;
    money:number;
    wins:number;
    losses:number;
    draws:number;
    banned:boolean;
    bot:boolean;

    @Type(() => Date)
    joinDate:Date;

    @Type(() => Date)
    banExpiration:Date;

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => OwnedItem)
    items:OwnedItem[];

    @Type(() => LegendaryProgress)
    legendaryProgress:LegendaryProgress[];

    @Type(() => Role)
    roles:Role[];

    @Type(() => GymLeaderRecord) 
    gyms:GymLeaderRecord[];

    @Type(() => EliteFourMemberRecord)
    eliteFourTerms:EliteFourMemberRecord[];

    @Type(() => ChampionRecord)
    championTerms:ChampionRecord[];

    @Type(() => GymVictory)
    gymVictories:GymVictory[];

    @Type(() => EliteFourVictory)
    eliteFourVictories:EliteFourVictory[];

    @Type(() => ChampionVictory)
    championVictories:ChampionVictory[];
}