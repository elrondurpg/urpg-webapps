import { UrpgObjectModel } from "../UrpgObjectModel";
import { EliteFourPokemonDelta } from "./EliteFourPokemonDelta";

export class EliteFourDelta extends UrpgObjectModel {
    pokemon:EliteFourPokemonDelta[];
    currentOwnerRecordDbid:number;
    removeOwner:boolean;
}