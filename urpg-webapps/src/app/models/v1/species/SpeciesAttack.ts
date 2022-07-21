import { Attack } from '../attack/Attack';
import { Species } from './Species';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';

export class SpeciesAttack extends UrpgObjectModel {

    @Type(() => Species)
    species:Species;

    @Type(() => Attack)
    attack:Attack;
    method:string;
    generation:number;
}