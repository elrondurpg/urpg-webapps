import { Item } from '../item/Item';
import { Member } from '../member/Member';
import { Type } from 'class-transformer';
import { UrpgObjectModel } from '../ObjectModel';

export class OwnedItem extends UrpgObjectModel {
    quantity:number;

    @Type(() => Member)
    trainer:Member;

    @Type(() => Item)
    item:Item;
}