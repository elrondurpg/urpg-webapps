import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionPropertyField } from 'src/app/models/AccordionPropertyField';
import { AccordionPropertyMap } from 'src/app/models/AccordionPropertyMap';

@Component({
  selector: 'resources-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.css']
})
export class NewItemModalComponent implements OnInit {

  @Input() title:string;
  @Input() mappedItems:AccordionPropertyMap;
  @Output() create = new EventEmitter();
  delta:any = {};

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    if (this.title !== undefined) {
      return this.title.replace(/(\s)/g, '');
    }
  }

  allKeysChosen(delta:any) {
    return this.mappedItems.keyDefinitions.find(keyDefinition => this.mappedItems.getDeltaValueForKey(delta, keyDefinition) === undefined) === undefined;
  }

  allKeysValid(delta:any) {
    return this.mappedItems.keyDefinitions.find(keyDefinition => {
      let value = this.mappedItems.getDeltaValueForKey(delta, keyDefinition);
      return value.length < keyDefinition.minLength || value.length > keyDefinition.maxLength;
    }) == undefined;
  }

  onCreate() {
    this.create.emit(this.delta);
    this.clear();
  } 

  clear() {
    this.delta = {};
  }

}
