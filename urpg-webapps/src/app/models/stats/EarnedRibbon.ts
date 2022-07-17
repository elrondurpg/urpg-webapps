import { ContestAttribute } from '../contest/ContestAttribute';
import { ContestRank } from '../contest/ContestRank';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../ObjectModel';
import { ContestType } from '../contest/ContestType';

export class EarnedRibbon extends UrpgObjectModel {
    logUrl:string;
    spent:number;
    quantity:number;

    @Type(() => ContestType) 
    generation:ContestType;

    @Type(() => ContestRank)
    rank:ContestRank;

    @Type(() => ContestAttribute)
    attribute:ContestAttribute;
}