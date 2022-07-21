import { UrpgObjectModel } from "../UrpgObjectModel";

export class OwnedItemDelta extends UrpgObjectModel {
    ignoreProperties: string[] = ["item"];
    item:string;
    quantity:number;
    delete:boolean;
}