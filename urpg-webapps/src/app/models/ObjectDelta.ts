import { asLiteral } from "@angular/compiler/src/render3/view/util";

export class ObjectDelta {
    ignoreProperties:string[] = [];

    isEmpty() {
        for (let key of Object.keys(this)) {
            if (key != "ignoreProperties" && !this.ignoreProperties.includes(key)) {
                let value = this[key];
                if (value != undefined) {
                    if (value instanceof ObjectDelta) {
                        if (!value.isEmpty()) {
                            return false;
                        }
                    }
                    else if (Array.isArray(value)) {
                        let empty = true;
                        value.forEach(item => {
                            if (!(item instanceof ObjectDelta && item.isEmpty()))
                            {
                                empty = false;
                            }
                        });
                        if (value.length > 0 && !empty) {
                            return false;
                        }
                    }
                    else {
                        return false
                    }
                }
            }
        }
        return true;
    }
}