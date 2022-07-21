import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';
import { GymLeaderRecord } from './GymLeaderRecord';

export class GymLeague extends UrpgObjectModel {
    @Type(() => GymLeaderRecord)
    gyms:GymLeaderRecord[];
}