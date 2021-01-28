import { Gym } from '../gym/Gym';
import { Member } from '../member/Member';
import { Type } from 'class-transformer';

export class EarnedBadge {

    @Type(() => Member)
    member:Member;

    @Type(() => Gym)
    gym:Gym;

    @Type(() => Date)
    date:Date;
    logUrl:string;
}