export class AccordionPropertyKey {
    allowedValues:string[] = [];
    filterable:boolean = false;
    title:string;
    modelSelector:string = undefined;
    deltaSelector:string = undefined;
    type:string;
    minLength:number;
    maxLength:number;
}

export class AccordionPropertyKeyBuilder {
    key:AccordionPropertyKey = new AccordionPropertyKey();

    withAllowedValues(allowedValues:string[]) {
        this.key.allowedValues = allowedValues;
        return this;
    }

    withFilterable(filterable:boolean) {
        this.key.filterable = filterable;
        return this;
    }

    withTitle(title:string) {
        this.key.title = title;
        return this;
    }

    withModelSelector(modelSelector:string) {
        this.key.modelSelector = modelSelector;
        return this;
    }

    withDeltaSelector(deltaSelector:string) {
        this.key.deltaSelector = deltaSelector;
        return this;
    }

    withType(type:string) {
        this.key.type = type;
        return this;
    }

    withMinLength(minLength:number) {
        this.key.minLength = minLength;
        return this;
    }

    withMaxLength(maxLength:number) {
        this.key.maxLength = maxLength;
        return this;
    }

    build() {
        return this.key;
    }
}