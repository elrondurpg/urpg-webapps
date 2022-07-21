import { Attack } from "../attack/Attack";
import { Type as Clazz } from 'class-transformer';
import { UrpgObjectModel } from "../ObjectModel";

export class ContestCombo extends UrpgObjectModel {
    overpowered:boolean;

    @Clazz(() => Attack)
    firstAttack:Attack;

    @Clazz(() => Attack)
    secondAttack:Attack;

    @Clazz(() => UrpgObjectModel)
    generation:UrpgObjectModel;
}