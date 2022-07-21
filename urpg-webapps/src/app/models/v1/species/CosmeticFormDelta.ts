import { UrpgObjectModel } from "../UrpgObjectModel";

export class CosmeticFormDelta extends UrpgObjectModel {
    ignoreProperties = [ "name" ];
    formName:string;
}