import { Role } from './Role';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';

export class Permission extends UrpgObjectModel {
    description:string;

    @Type(() => Role)
    roles:Role[];
}