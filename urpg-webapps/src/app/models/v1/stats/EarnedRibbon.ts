import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../UrpgObjectModel';

export class EarnedRibbon extends UrpgObjectModel {
    logUrl:string;
    spent:number;
    quantity:number;

    @Type(() => UrpgObjectModel) 
    generation:UrpgObjectModel;

    @Type(() => UrpgObjectModel)
    rank:UrpgObjectModel;

    @Type(() => UrpgObjectModel)
    attribute:UrpgObjectModel;
}