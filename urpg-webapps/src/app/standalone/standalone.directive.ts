import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[standalone]',
})
export class StandaloneDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}