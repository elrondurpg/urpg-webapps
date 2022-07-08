import { Type } from "class-transformer";
import { UrpgObjectModel } from "../ObjectModel";
import { OwnedPokemon } from "../stats/OwnedPokemon";
import { EliteFourOwnershipTerm } from "./EliteFourOwnershipTerm";

export class EliteFour extends UrpgObjectModel {

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => EliteFourOwnershipTerm)
    currentOwnerRecord:EliteFourOwnershipTerm;
}