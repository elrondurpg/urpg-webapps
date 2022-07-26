import { UrpgObjectModel } from "../UrpgObjectModel";
import { Type as Clazz } from 'class-transformer';
import { ItemBundle } from "./ItemBundle";
import { Item } from "./Item";

export class ItemBundleItem extends UrpgObjectModel {
    quantity:number;

    @Clazz(() => ItemBundle)
    bundle:ItemBundle;
    @Clazz(() => Item)
    item:Item;
}