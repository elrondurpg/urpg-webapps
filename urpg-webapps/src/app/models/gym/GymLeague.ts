import { Gym } from './Gym';
import { Type } from 'class-transformer';
import { GymLeaderRecord } from './GymLeaderRecord';

export class GymLeague {
    dbid:number;
    name:string;

    @Type(() => GymLeaderRecord)
    gyms:GymLeaderRecord[];
}