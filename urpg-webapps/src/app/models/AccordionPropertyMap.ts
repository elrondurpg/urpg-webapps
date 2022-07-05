import { AccordionPropertyField } from "./AccordionPropertyField";
import { AccordionPropertyKey } from "./AccordionPropertyKey";
import { plainToClass } from 'class-transformer';

export class AccordionPropertyMap {
    keyDefinitions:AccordionPropertyKey[] = undefined;
    fieldDefinitions:AccordionPropertyField[] = undefined;
    private prototypes:any[] = undefined;
    deltas:any[] = undefined;
    objectClass = undefined;

    isEmpty() {
        return (this.prototypes == undefined || this.prototypes.length == 0) 
            && (this.deltas == undefined || this.deltas.length == 0);
    }

    addDelta(delta:any) {
        if (this.fieldDefinitions !== undefined) {
            this.fieldDefinitions.forEach(field => {
                delta[field.name] = field.defaultValue;
            });
          }
        if (this.objectClass !== undefined) {
            delta = plainToClass(this.objectClass, delta);
        }
        this.deltas.push(delta);
    }
    
    createDelta(prototype:any) {
        let delta = {};

        this.keyDefinitions.forEach(keyDefinition => {
            let value = this.getPrototypeValueForKey(prototype, keyDefinition);
            this.setDeltaValueForKey(delta, keyDefinition, value);
        });

        if (this.objectClass !== undefined) {
          delta = plainToClass(this.objectClass, delta);
        }
        
        return delta;
    }

    findMatchingDelta(delta:any) {if (this.prototypes !== undefined) {
        return this.deltas.find(compare => {
            return this.keyDefinitions.find(keyDefinition => {
                return this.getDeltaValueForKey(delta, keyDefinition) != compare[keyDefinition.deltaSelector];
            }) == undefined;
        });
    }
    }

    getPrototype(delta:any) {
        if (this.prototypes !== undefined) {
            return this.prototypes.find(prototype => {
                return this.keyDefinitions.find(keyDefinition => {
                    return this.getPrototypeValueForKey(prototype, keyDefinition) != delta[keyDefinition.deltaSelector];
                }) == undefined;
            });
        }
    }

    setPrototypes(prototypes:any[]) {
        this.prototypes = prototypes;
        if (prototypes != undefined) {
            prototypes.forEach(prototype => {
                this.deltas.push(this.createDelta(prototype));
            });
        }
    }

    remove(deltaToRemove:any) {
        let index = undefined;
        for (let i = 0; i < this.deltas.length; i++) {
            let delta = this.deltas[i];
            if (this.keyDefinitions.find(keyDefinition => {
                return this.getDeltaValueForKey(deltaToRemove, keyDefinition) != this.getDeltaValueForKey(delta, keyDefinition);
            }) == undefined) {
                index = i;
            }

        }
        if (index != undefined) {
            this.deltas.splice(index, 1);
        }
    }

    getPrototypeValueForKey(prototype:any, keyDefinition:AccordionPropertyKey) {
        let tokens:string[] = keyDefinition.modelSelector.split(".");
        let cursor:any = prototype;
        tokens.forEach(token => {
            cursor = cursor[token];
        });
        return cursor;
    }

    getDeltaValueForKey(delta:any, keyDefinition:AccordionPropertyKey) {
        let tokens:string[] = keyDefinition.deltaSelector.split(".");
        let cursor:any = delta;
        tokens.forEach(token => {
            cursor = cursor[token];
        });
        return cursor;
    }

    getNumFilterableKeys() {
        if (this.keyDefinitions != undefined) {
            return this.getFilterableKeys().length;
        }
        else return 0;
    }

    getFirstFilterableKey() {
        return this.keyDefinitions.find(keyDefinition => keyDefinition.filterable);
    }

    getFilterableKeys() {        
        return this.keyDefinitions.filter(keyDefinition => keyDefinition.filterable);
    }

    getFilteredDeltas(filters:any) {
        if (this.deltas !== undefined) {
        return this.deltas.filter(delta => 
            Object.keys(filters).find(key => 
                !(filters[key] == '' || delta[key].toLowerCase().indexOf(filters[key].toLowerCase()) == 0)
            ) === undefined
        ).sort((a, b) => {
            for (let i = 0; i < this.keyDefinitions.length; i++) {
                let keyDefinition = this.keyDefinitions[i];
                let valueA = a[keyDefinition.deltaSelector];
                let valueB = b[keyDefinition.deltaSelector];
                if (valueA < valueB) return -1;
                else if (valueB > valueA) return 1;
            }
            return 0;
        }); 
        }
    }

    hasChanges() {
        return this.prototypes !== undefined && this.deltas !== undefined 
            && this.deltas.length != this.prototypes.length;
    }

    private setDeltaValueForKey(delta:any, keyDefinition:AccordionPropertyKey, value:any) {
        let tokens:string[] = keyDefinition.deltaSelector.split(".");
        let cursor:any = delta;
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            if (i == tokens.length - 1) {
                cursor[token] = value;
            }
            else if (cursor[token] == undefined) {
                cursor[token] = {};
                cursor = cursor[token];
            }
        }
    }
}

export class AccordionPropertyMapBuilder {
    map = new AccordionPropertyMap();

    withKeyDefinitions(keyDefinitions:AccordionPropertyKey[]) {
        this.map.keyDefinitions = keyDefinitions;
        return this;
    }

    withFieldDefinitions(fieldDefinitions:AccordionPropertyField[]) {
        this.map.fieldDefinitions = fieldDefinitions;
        return this;
    }

    withDeltas(deltas:any[]) {
        this.map.deltas = deltas;
        return this;
    }

    withObjectClass(objectClass:any) {
        this.map.objectClass = objectClass;
        return this;
    }

    build() {
        return this.map;
    }

    buildWithPrototypes(prototypes:any[]) {
        this.map.setPrototypes(prototypes);
        return this.map;
    }
}