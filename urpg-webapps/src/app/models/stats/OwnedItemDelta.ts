import { UrpgObjectModel } from "../ObjectModel";

export class OwnedItemDelta extends UrpgObjectModel {
    ignoreProperties: string[] = ["name"];
    item:string;
    quantity:number;
    delete:boolean;
}