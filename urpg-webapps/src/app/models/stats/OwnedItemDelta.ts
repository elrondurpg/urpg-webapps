import { ObjectDelta } from "../ObjectDelta";

export class OwnedItemDelta extends ObjectDelta {
    item:string;
    quantity:number;
    delete:boolean;
}