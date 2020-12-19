import { Attack } from '../attack/Attack';
import { Species } from './Species';
import { Type } from 'class-transformer';

export class SpeciesAttack {

    @Type(() => Species)
    species:Species;

    @Type(() => Attack)
    attack:Attack;
    method:string;
    generation:number;
}