import { Type } from "class-transformer";
import { UrpgObjectModel } from "../UrpgObjectModel";
import { OwnedPokemon } from "../stats/OwnedPokemon";
import { EliteFourMemberRecord } from "./EliteFourMemberRecord";

export class EliteFour extends UrpgObjectModel {

    @Type(() => OwnedPokemon)
    pokemon:OwnedPokemon[];

    @Type(() => EliteFourMemberRecord)
    currentOwnerRecord:EliteFourMemberRecord;
}