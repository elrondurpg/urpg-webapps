import { Exclude, Type } from "class-transformer";
import { UrpgObjectModel } from "src/app/models/v1/UrpgObjectModel";

export class Page<T extends UrpgObjectModel> {
    @Exclude()
    private type: Function;

    itemsPerPage:number;
    page:number;
    size:number;
    totalItems:number;
    totalPages:number;

    @Type(options => {
        return (options.newObject as Page<T>).type;
    })
    content: T[];

    constructor(type: Function) {
        this.type = type;
    }
}