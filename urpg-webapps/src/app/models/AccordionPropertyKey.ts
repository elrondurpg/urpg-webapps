export class AccordionPropertyKey {
    allowedValues:string[] = [];
    filterable:boolean = false;
    label:string;
    prototypeSelector:string = undefined;
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

    withLabel(label:string) {
        this.key.label = label;
        return this;
    }

    withPrototypeSelector(prototypeSelector:string) {
        this.key.prototypeSelector = prototypeSelector;
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