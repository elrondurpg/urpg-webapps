import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ZydecoTs } from 'zydeco-ts';

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
  providers: [ {provide: APP_BASE_HREF, useValue: '/urpg-webapps/'} ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
    constructor(injector: Injector) {
        AppModule.injector = injector;
    }
 }
