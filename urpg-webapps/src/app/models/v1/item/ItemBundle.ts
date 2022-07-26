import { UrpgObjectModel } from "../UrpgObjectModel";
import { Type as Clazz } from 'class-transformer';
import { ItemBundleItem } from "./ItemBundleItem";

export class ItemBundle extends UrpgObjectModel {
    price:number;

    @Clazz(() => ItemBundleItem)
    items:ItemBundleItem[];
}