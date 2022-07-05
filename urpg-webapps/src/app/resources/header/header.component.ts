import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { ResourceComponent } from '../resource/resource.component';

@Component({
  selector: 'resources-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() parent:ResourceComponent<any, any>;

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor() { }

  ngOnInit() {

  }

  clearMessage() {
    this.messageBox.clear();
  }

  showSuccessMessage(message:string) {
    this.messageBox.showSuccess(message);
  }

  showErrorMessage(message:string) {
    this.messageBox.showError(message);
  }
  
  showErrorMessageArray(header:string, errors:string[]) {
    this.messageBox.showErrorArray(header, errors);
  }
}
