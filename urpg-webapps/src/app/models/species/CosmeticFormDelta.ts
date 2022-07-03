import { ObjectDelta } from "../ObjectDelta";

export class CosmeticFormDelta extends ObjectDelta {
    ignoreProperties = [ "name" ];
    name:string;
    formName:string;
    delete:boolean;
}