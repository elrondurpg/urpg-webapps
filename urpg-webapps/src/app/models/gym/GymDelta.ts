import { ObjectDelta } from "../ObjectDelta";
import { GymPokemonDelta } from "./GymPokemonDelta";

export class GymDelta extends ObjectDelta {
    name:string;
    badge:string;
    type:string;
    pokemon:GymPokemonDelta[];
    currentOwnerRecordDbid:number;
    removeOwner:boolean;
}