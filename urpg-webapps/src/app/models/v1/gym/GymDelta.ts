import { UrpgObjectModel } from "../UrpgObjectModel";
import { GymPokemonDelta } from "./GymPokemonDelta";

export class GymDelta extends UrpgObjectModel {
    badge:string;
    type:string;
    pokemon:GymPokemonDelta[];
    currentOwnerRecordDbid:number;
    removeOwner:boolean;
}