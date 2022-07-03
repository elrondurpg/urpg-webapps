import { ObjectDelta } from "../ObjectDelta";
import { ChampionPokemonDelta } from "./ChampionPokemonDelta";

export class ChampionDelta extends ObjectDelta {
    name:string;
    pokemon:ChampionPokemonDelta[];
    currentOwnerRecordDbid:number;
    removeOwner:boolean;
}