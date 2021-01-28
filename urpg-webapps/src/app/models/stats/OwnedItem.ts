import { Item } from '../item/Item';
import { Member } from '../member/Member';
import { Type } from 'class-transformer';

export class OwnedItem {
    quantity:number;

    @Type(() => Member)
    trainer:Member;

    @Type(() => Item)
    item:Item;
}