import { UrpgObjectModel } from "../ObjectModel";

export class OwnedExtraMoveDelta extends UrpgObjectModel {
    ignoreProperties = ["attack"];
    attack:string;
}