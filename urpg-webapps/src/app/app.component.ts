import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ComponentRegistryService } from './standalone/component-registry.service';
import { StandaloneDirective } from './standalone/standalone.directive';

@Component({
  selector: 'urpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'urpg-webapps';
  standaloneSelector = undefined;

  @ViewChild(StandaloneDirective, {static: true}) 
  standalone!: StandaloneDirective;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    let native = this.elRef.nativeElement;
    this.standaloneSelector = native.getAttribute('loadcomponent');
    this.loadComponent(this.standaloneSelector);
  }

  loadComponent(selector) {
    if (selector != null) {
      let viewContainerRef = this.standalone.viewContainerRef;
      viewContainerRef.clear();
      let componentClass = ComponentRegistryService.getBySelector(selector);
      viewContainerRef.createComponent(componentClass);
    }
  }
}
