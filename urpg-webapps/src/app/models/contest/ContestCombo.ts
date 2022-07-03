import { Attack } from "../attack/Attack";
import { Type as Clazz } from 'class-transformer';

export class ContestCombo {
    overpowered:boolean;
    contestType:string;

    @Clazz(() => Attack)
    firstAttack:Attack;

    @Clazz(() => Attack)
    secondAttack:Attack;
}