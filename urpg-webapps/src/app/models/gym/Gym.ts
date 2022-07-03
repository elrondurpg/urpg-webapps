import { Badge } from './Badge';
import { Type } from 'class-transformer';
import { OwnedPokemon } from '../stats/OwnedPokemon';
import { Type as PokemonType } from '../species/Type';
import { GymOwnershipTerm } from './GymOwnershipTerm';
import { GymVictory } from '../stats/GymVictory';


export class Gym {
    dbid:number;
    name:string;
    
    @Type(() => Badge)
    badge:Badge;

    @Type(() => PokemonType)
    type:PokemonType;

    @Type(() => GymVictory)
    victories:GymVictory[];

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => GymOwnershipTerm)
    currentOwnerRecord:GymOwnershipTerm;

    test() {
        console.log("This is a test.");
    }
}