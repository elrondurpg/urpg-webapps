export class EditPaneAttribute {
    title:string;
    type:string = "string";
    modelSelector:string;
    deltaSelector:string;
    minlength:number = 0;
    maxlength:number = 0;
    required:boolean = false;
    instructions:string = null;
}

export class EditPaneAttributeBuilder {
    attribute:EditPaneAttribute = new EditPaneAttribute();

    withTitle(title:string) {
        this.attribute.title = title;
        return this;
    }

    withType(type:string) {
        this.attribute.type = type;
        return this;
    }

    withModelSelector(modelSelector:string) {
        this.attribute.modelSelector = modelSelector;
        return this;
    }

    withDeltaSelector(deltaSelector:string) {
        this.attribute.deltaSelector = deltaSelector;
        return this;
    }

    withMinLength(minlength:number) {
        this.attribute.minlength = minlength;
        return this;
    }

    withMaxLength(maxlength:number) {
        this.attribute.maxlength = maxlength;
        return this;
    }

    withRequired(required:boolean) {
        this.attribute.required = required;
        return this;
    }

    withInstructions(instructions:string) {
        this.attribute.instructions = instructions;
        return this;
    }

    build() {
        return this.attribute;
    }
}