import { Member } from './Member';
import { Permission } from './Permission';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';

export class Role extends UrpgObjectModel {
    @Type(() => Permission)
    permissions:Permission[];

    @Type(() => Member)
    members:Member[];
}