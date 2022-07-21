import { Ability } from '../ability/Ability';
import { Species } from './Species';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';

export class SpeciesAbility extends UrpgObjectModel {

    @Type(() => Species)
    species:Species;

    @Type(() => Ability)
    ability:Ability;
    hidden:boolean;
}