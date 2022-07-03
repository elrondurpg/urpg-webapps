import { Gym } from './Gym';
import { Type } from 'class-transformer';
import { GymOwnershipTerm } from './GymOwnershipTerm';

export class GymLeague {
    dbid:number;
    name:string;

    @Type(() => GymOwnershipTerm)
    gyms:GymOwnershipTerm[];
}