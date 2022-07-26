import { UrpgObjectModel } from "../UrpgObjectModel";
import { ItemBundleItemDelta } from "./ItemBundleItemDelta";

export class ItemBundleDelta extends UrpgObjectModel {
    price:number;
    items:ItemBundleItemDelta[] = [];
}