import { Section } from '../general/Section';
import { Member } from '../member/Member';
import { Type } from 'class-transformer';

export class LegendaryProgress {
    dbid:number;
    value:number;
    logUrl:string;

    @Type(() => Member)
    trainer:Member;

    @Type(() => Section)
    section:Section;

    @Type(() => Date)
    date:Date;
}