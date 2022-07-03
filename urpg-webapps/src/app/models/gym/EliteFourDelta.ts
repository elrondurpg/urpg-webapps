import { ObjectDelta } from "../ObjectDelta";
import { EliteFourPokemonDelta } from "./EliteFourPokemonDelta";

export class EliteFourDelta extends ObjectDelta {
    name:string;
    pokemon:EliteFourPokemonDelta[];
    currentOwnerRecordDbid:number;
    removeOwner:boolean;
}