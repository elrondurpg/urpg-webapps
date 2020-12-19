import { ContestAttribute } from '../contest/ContestAttribute';
import { ContestRank } from '../contest/ContestRank';
import { OwnedPokemon } from './OwnedPokemon';
import { Type } from 'class-transformer';

export class EarnedRibbon {
    dbid:number;
    url:string;
    spent:boolean;

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon;

    @Type(() => ContestRank)
    rank:ContestRank;

    @Type(() => ContestAttribute)
    attribute:ContestAttribute;
}