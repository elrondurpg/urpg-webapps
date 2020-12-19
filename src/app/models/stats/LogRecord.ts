import { Member } from '../member/Member';
import { Type } from 'class-transformer';

export class LogRecord {
    dbid:number;
    message:string;

    @Type(() => Member)
    member:Member;

    @Type(() => Member)
    creator:Member;

    @Type(() => Date)
    timestamp:Date;
}