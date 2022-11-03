import { Component } from "@angular/core";

type ComponentClass = { new (...args:any[]): Component };
export const REGISTRY = new Map<string, ComponentClass>();

export class ComponentRegistryService {

  static getBySelector(selector:string) {
    return REGISTRY.get(selector);
  }

  static put(selector:string, componentClass:ComponentClass) {
    REGISTRY.set(selector, componentClass);
  }
}
