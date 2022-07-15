import { Section } from '../general/Section';
import { Member } from '../member/Member';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../ObjectModel';

export class LegendaryProgress extends UrpgObjectModel {
    value:number;
    logUrl:string;

    @Type(() => Member)
    trainer:Member;

    @Type(() => Section)
    section:Section;

    @Type(() => Date)
    date:Date;
}