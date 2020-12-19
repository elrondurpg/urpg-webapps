import { EarnedBadge } from '../stats/EarnedBadge';
import { LegendaryProgress } from '../stats/LegendaryProgress';
import { OwnedItem } from '../stats/OwnedItem';
import { OwnedPokemon } from '../stats/OwnedPokemon';
import { Role } from './Role';
import { Type } from 'class-transformer';
import { Gym } from '../gym/Gym';

export class Member {
    dbid:number;
    discordId:string;
    username:string;
    money:number;
    wins:number;
    losses:number;
    draws:number;
    banned:boolean;

    @Type(() => Date)
    joinDate:Date;

    @Type(() => Date)
    banExpiration:Date;

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => OwnedItem)
    items:OwnedItem[];

    @Type(() => EarnedBadge)
    badges:EarnedBadge[];

    @Type(() => LegendaryProgress)
    legendaryProgress:LegendaryProgress[];

    @Type(() => Role)
    roles:Role[];

    @Type(() => Gym) 
    gyms:Gym[];
}