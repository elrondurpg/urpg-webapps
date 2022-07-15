import { UrpgObjectModel } from "../ObjectModel";

export class OwnedItemDelta extends UrpgObjectModel {
    ignoreProperties: string[] = ["item"];
    item:string;
    quantity:number;
    delete:boolean;
}