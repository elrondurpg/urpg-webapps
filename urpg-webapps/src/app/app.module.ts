import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ZydecoTs } from 'zydeco-ts';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ZydecoTs
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: window['_app_base']} ]
})
export class AppModule {
  static injector: Injector;
  static useRouting = false;
  private bootstrapped = false;
  constructor() {}

  ngDoBootstrap(appRef: ApplicationRef) {
    this.tryBootstrap(appRef, AppComponent, 'urpg-root');
    this.tryBootstrap(appRef, SiteHeaderComponent, 'urpg-site-header');
  }

  tryBootstrap(appRef, componentClass, selector) {
    try {
      this.doBootstrap(appRef, componentClass, selector);
      if (selector == 'urpg-root') {
        AppModule.useRouting = true;
      }
    }
    catch (e) {}
  }

  doBootstrap(appRef, componentClass, selector) {
    if (!this.bootstrapped) {
      appRef.bootstrap(componentClass, selector);
      this.bootstrapped = true;
    }
  }
}