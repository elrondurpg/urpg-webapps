import { Type } from "class-transformer";
import { UrpgObjectModel } from "../ObjectModel";
import { OwnedPokemon } from "../stats/OwnedPokemon";
import { ChampionOwnershipTerm } from "./ChampionOwnershipTerm";

export class Champion extends UrpgObjectModel {
    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => ChampionOwnershipTerm)
    currentOwnerRecord:ChampionOwnershipTerm;
}