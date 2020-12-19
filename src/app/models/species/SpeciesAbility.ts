import { Ability } from '../ability/Ability';
import { Species } from './Species';
import { Type } from 'class-transformer';

export class SpeciesAbility {

    @Type(() => Species)
    species:Species;

    @Type(() => Ability)
    ability:Ability;
    hidden:boolean;
}