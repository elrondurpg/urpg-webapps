import { Type } from "class-transformer";
import { OwnedPokemon } from "../stats/OwnedPokemon";
import { ChampionOwnershipTerm } from "./ChampionOwnershipTerm";

export class Champion {
    dbid:number;
    name:string;

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => ChampionOwnershipTerm)
    currentOwnerRecord:ChampionOwnershipTerm;
}