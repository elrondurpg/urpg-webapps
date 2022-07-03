import { Type } from "class-transformer";
import { OwnedPokemon } from "../stats/OwnedPokemon";
import { EliteFourOwnershipTerm } from "./EliteFourOwnershipTerm";

export class EliteFour {
    dbid:number;
    name:string;

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => EliteFourOwnershipTerm)
    currentOwnerRecord:EliteFourOwnershipTerm;
}