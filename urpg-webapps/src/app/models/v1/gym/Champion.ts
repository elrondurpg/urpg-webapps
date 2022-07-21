import { Type } from "class-transformer";
import { UrpgObjectModel } from "../UrpgObjectModel";
import { OwnedPokemon } from "../stats/OwnedPokemon";
import { ChampionRecord } from "./ChampionRecord";

export class Champion extends UrpgObjectModel {
    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => ChampionRecord)
    currentOwnerRecord:ChampionRecord;
}