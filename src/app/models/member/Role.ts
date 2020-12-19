import { Member } from './Member';
import { Permission } from './Permission';
import { Type } from 'class-transformer';

export class Role {
    dbid:number;
    name:string;

    @Type(() => Permission)
    permissions:Permission[];

    @Type(() => Member)
    members:Member[];
}