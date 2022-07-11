import { UrpgObjectModel } from "../ObjectModel";

export class OwnedItemDelta extends UrpgObjectModel {
    item:string;
    quantity:number;
    delete:boolean;
}