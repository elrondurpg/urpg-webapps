import { UrpgObjectModel } from "../UrpgObjectModel";

export class ItemBundleItemDelta extends UrpgObjectModel {
    ignoreProperties = ["bundle", "item"];

    bundle:string;
    item:string;
    quantity:number;

}