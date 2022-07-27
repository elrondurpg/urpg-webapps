import { UrpgObjectModel } from "../UrpgObjectModel";
import { Type as Clazz } from 'class-transformer';
import { Ability } from "../ability/Ability";

export class WishlistAbility extends UrpgObjectModel {
    @Clazz(() => Ability) 
    ability:Ability;
}