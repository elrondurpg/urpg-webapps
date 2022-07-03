import { ObjectDelta } from "../ObjectDelta";

export class GymPokemonDelta extends ObjectDelta {
    dbid:number;
    delete:boolean;
}