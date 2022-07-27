import { UrpgObjectModel } from "../UrpgObjectModel";

export class WishlistMoveDelta extends UrpgObjectModel {
    ignoreProperties = ["move"];
    move:string;
}