import { Type } from 'class-transformer';
import { OwnedPokemon } from '../stats/OwnedPokemon';
import { Type as PokemonType } from '../species/Type';
import { GymLeaderRecord } from './GymLeaderRecord';
import { GymVictory } from '../stats/GymVictory';
import { UrpgObjectModel } from '../UrpgObjectModel';


export class Gym extends UrpgObjectModel {
    
    @Type(() => UrpgObjectModel)
    badge:UrpgObjectModel;

    @Type(() => PokemonType)
    type:PokemonType;

    @Type(() => GymVictory)
    victories:GymVictory[];

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => GymLeaderRecord)
    currentOwnerRecord:GymLeaderRecord;
}