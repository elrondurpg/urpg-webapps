import { UrpgObjectModel } from "../UrpgObjectModel";
import { ChampionPokemonDelta } from "./ChampionPokemonDelta";

export class ChampionDelta extends UrpgObjectModel {
    pokemon:ChampionPokemonDelta[];
    currentOwnerRecordDbid:number;
    removeOwner:boolean;
}