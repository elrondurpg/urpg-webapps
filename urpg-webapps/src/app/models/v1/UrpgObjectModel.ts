import { ObjectModel } from "zydeco-ts";

export class UrpgObjectModel extends ObjectModel {
    dbid:number;
    name:string;

    getDisplayName() : string {
        return this.name;
    }

    getId() {
        return this.dbid;
    }
}