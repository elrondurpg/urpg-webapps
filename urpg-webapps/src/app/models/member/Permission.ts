import { Role } from './Role';
import { Type } from 'class-transformer';

export class Permission {
    dbid:number;
    name:string;
    description:string;

    @Type(() => Role)
    roles:Role[];
}