import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resources-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message:string = undefined;
  status:string = undefined;
  errors:string[] = undefined;

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.message = undefined;
    this.status = undefined;
    this.errors = undefined;
  }

  showSuccess(message:string) {
    this.status = "success";
    this.message = message;
  }

  showError(message:string) {
    this.status = "error";
    this.message = message;
  }

  showErrorArray(header:string, errors:string[]) {
    this.status = "errorArray";
    this.message = header;
    this.errors = errors; 
  }

}
