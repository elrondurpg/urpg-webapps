import { Item } from '../item/Item';
import { Member } from '../member/Member';
import { EarnedBadge } from '../stats/EarnedBadge';
import { Badge } from './Badge';
import { GymLeague } from './GymLeague';
import { Type } from 'class-transformer';
import { OwnedPokemon } from '../stats/OwnedPokemon';

export class Gym {
    dbid:number;
    name:string;
    wins:number;
    losses:number;
    draws:number;
    active:boolean;
    
    @Type(() => Member)
    owner:Member;
    
    @Type(() => GymLeague)
    league:GymLeague;
    
    @Type(() => Badge)
    badge:Badge;

    @Type(() => Date)
    openDate:Date;

    @Type(() => Item)
    tm:Item;

    @Type(() => EarnedBadge)
    winners:EarnedBadge[];

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];
}