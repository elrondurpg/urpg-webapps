import { Gym } from './Gym';
import { Type } from 'class-transformer';

export class GymLeague {
    dbid:number;
    name:string;

    @Type(() => Gym)
    gyms:Gym[];
}