import { SpeciesAbility } from '../species/SpeciesAbility';
import { Type } from 'class-transformer';

export class Ability {
    dbid:number;
    name:string;
    description:string;

    @Type(() => SpeciesAbility)
    pokemon:SpeciesAbility[]
}