import { max, min } from "rxjs/operators";

export class AccordionPropertyField {
    label:string;
    name:any;
    type:string;
    selectList:string[];
    defaultValue = undefined;
    required:boolean = false;
    min:number = undefined;
    max:number = undefined;
    step:number = 1;
    minLength:number = undefined;
    maxLength:number = undefined;
    visible:boolean = true;
}

export class AccordionPropertyFieldBuilder {
    field:AccordionPropertyField = new AccordionPropertyField();

    withLabel(label:string) {
        this.field.label = label;
        return this;
    }

    withName(name:string) {
        this.field.name = name;
        return this;
    }

    withType(type:string) {
        this.field.type = type;
        return this;
    }

    withSelectList(selectList:string[]) {
        this.field.selectList = selectList;
        return this;
    }

    withDefaultValue(defaultValue:any) {
        this.field.defaultValue = defaultValue;
        return this;
    }

    withRequired(required:boolean) {
        this.field.required = required;
        return this;
    }

    withMin(min:number) {
        this.field.min = min;
        return this;
    }

    withMax(max:number) {
        this.field.max = max;
        return this;
    }

    withStep(step:number) {
        this.field.step = step;
        return this;
    }

    withMinLength(minLength:number) {
        this.field.minLength = minLength;
        return this;
    }

    withMaxLength(maxLength:number) {
        this.field.maxLength = maxLength;
        return this;
    }

    withVisible(visible:boolean) {
        this.field.visible = visible;
        return this;
    }

    build() {
        return this.field;
    }
}