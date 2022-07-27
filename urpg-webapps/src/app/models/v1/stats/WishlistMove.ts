import { UrpgObjectModel } from "../UrpgObjectModel";
import { Type as Clazz } from 'class-transformer';
import { Attack } from "../attack/Attack";

export class WishlistMove extends UrpgObjectModel {
    @Clazz(() => Attack) 
    move:Attack;
}