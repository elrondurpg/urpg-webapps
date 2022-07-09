import { UrpgObjectModel } from "../ObjectModel";
import { ChampionPokemonDelta } from "./ChampionPokemonDelta";

export class ChampionDelta extends UrpgObjectModel {
    name:string;
    pokemon:ChampionPokemonDelta[];
    currentOwnerRecordDbid:number;
    removeOwner:boolean;
}