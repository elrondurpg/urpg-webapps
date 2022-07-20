import { Attack } from "../attack/Attack";
import { Type as Clazz } from 'class-transformer';
import { UrpgObjectModel } from "../ObjectModel";
import { ContestType } from "./ContestType";

export class ContestCombo extends UrpgObjectModel {
    overpowered:boolean;

    @Clazz(() => Attack)
    firstAttack:Attack;

    @Clazz(() => Attack)
    secondAttack:Attack;

    @Clazz(() => ContestType)
    generation:ContestType;
}