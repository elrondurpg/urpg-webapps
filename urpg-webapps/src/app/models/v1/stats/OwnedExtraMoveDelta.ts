import { UrpgObjectModel } from "../UrpgObjectModel";

export class OwnedExtraMoveDelta extends UrpgObjectModel {
    ignoreProperties = ["attack"];
    attack:string;
}