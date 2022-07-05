import { Type } from "class-transformer";
import { ObjectModel } from "../ObjectModel";
import { OwnedPokemon } from "../stats/OwnedPokemon";
import { ChampionOwnershipTerm } from "./ChampionOwnershipTerm";

export class Champion extends ObjectModel {
    name:string;

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => ChampionOwnershipTerm)
    currentOwnerRecord:ChampionOwnershipTerm;
}