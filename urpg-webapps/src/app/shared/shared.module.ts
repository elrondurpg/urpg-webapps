import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CollapsibleMessageComponent } from './collapsible-message/collapsible-message.component';



@NgModule({
  declarations: [SiteHeaderComponent, LoginModalComponent, CollapsibleMessageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ CollapsibleMessageComponent, SiteHeaderComponent ]
})
export class SharedModule { }
