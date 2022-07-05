import { EditPaneAttribute } from "./EditPaneAttribute";

export class EditPaneDataDefinition {
    attributes:EditPaneAttribute[];

    constructor(attributes:EditPaneAttribute[]) {
        this.attributes = attributes;
    }
}