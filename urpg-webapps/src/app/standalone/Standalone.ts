import { ComponentRegistryService } from "./component-registry.service"

export function Standalone(selector:string) {
    return function(target) {
        ComponentRegistryService.put(selector, target);
    }
}