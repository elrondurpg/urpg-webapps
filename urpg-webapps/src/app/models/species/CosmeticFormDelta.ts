import { UrpgObjectModel } from "../ObjectModel";

export class CosmeticFormDelta extends UrpgObjectModel {
    ignoreProperties = [ "name" ];
    formName:string;
}