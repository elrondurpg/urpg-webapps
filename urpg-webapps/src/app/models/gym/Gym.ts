import { Badge } from './Badge';
import { Type } from 'class-transformer';
import { OwnedPokemon } from '../stats/OwnedPokemon';
import { Type as PokemonType } from '../species/Type';
import { GymOwnershipTerm } from './GymOwnershipTerm';
import { GymVictory } from '../stats/GymVictory';
import { UrpgObjectModel } from '../ObjectModel';


export class Gym extends UrpgObjectModel {
    
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
}