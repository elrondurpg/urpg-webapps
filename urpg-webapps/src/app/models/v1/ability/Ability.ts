import { SpeciesAbility } from '../species/SpeciesAbility';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';

export class Ability extends UrpgObjectModel {
    description:string;

    @Type(() => SpeciesAbility)
    pokemon:SpeciesAbility[]
}