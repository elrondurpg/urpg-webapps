import { ContestAttribute } from '../contest/ContestAttribute';
import { ContestRank } from '../contest/ContestRank';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../ObjectModel';
import { ContestType } from '../contest/ContestType';

export class EarnedRibbon extends UrpgObjectModel {
    url:string;
    spent:boolean;

    @Type(() => ContestRank)
    rank:ContestRank;

    @Type(() => ContestAttribute)
    attribute:ContestAttribute;

    @Type(() => ContestType) 
    contestType:ContestType;
}