import { LegendaryProgress } from '../stats/LegendaryProgress';
import { OwnedItem } from '../stats/OwnedItem';
import { OwnedPokemon } from '../stats/OwnedPokemon';
import { Role } from './Role';
import { Type } from 'class-transformer';
import { GymOwnershipTerm } from '../gym/GymOwnershipTerm';
import { EliteFourVictory } from '../stats/EliteFourVictory';
import { ChampionVictory } from '../stats/ChampionVictory';
import { GymVictory } from '../stats/GymVictory';
import { EliteFourOwnershipTerm } from '../gym/EliteFourOwnershipTerm';
import { ChampionOwnershipTerm } from '../gym/ChampionOwnershipTerm';
import { UrpgObjectModel } from '../ObjectModel';

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

    @Type(() => GymOwnershipTerm) 
    gyms:GymOwnershipTerm[];

    @Type(() => EliteFourOwnershipTerm)
    eliteFourTerms:EliteFourOwnershipTerm[];

    @Type(() => ChampionOwnershipTerm)
    championTerms:ChampionOwnershipTerm[];

    @Type(() => GymVictory)
    gymVictories:GymVictory[];

    @Type(() => EliteFourVictory)
    eliteFourVictories:EliteFourVictory[];

    @Type(() => ChampionVictory)
    championVictories:ChampionVictory[];
}