import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionPropertyMap } from 'src/app/models/AccordionPropertyMap';

@Component({
  selector: 'resources-edit-attribute-accordion',
  templateUrl: './edit-attribute-accordion.component.html',
  styleUrls: ['./edit-attribute-accordion.component.css']
})
export class EditAttributeAccordionComponent implements OnInit {

  @Input() title:string = undefined;
  
  @Input() importable:boolean = false;
  
  @Input() headerColumn1 = "Key";
  @Input() headerColumn2 = "Current Attributes";
  @Input() headerColumn3 = "New Attributes";

  @Input() mappedItems:AccordionPropertyMap;
  @Input() currentValues:any[];
  @Input() deltas:any[] = [];
  _deltas:any[] = [];

  @Input() editType:string = undefined;
  @Output() updateDelta = new EventEmitter();

  filters = {};

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    if (this.title !== undefined) {
      return this.title.replace(/(\s)/g, '');
    }
  }

  toggleDelete(delta:any) {
    let prototype = this.mappedItems.getPrototype(delta);
    if (prototype === undefined) {
      this.mappedItems.remove(delta);
    }
    else {
      if (delta['delete']) {
        delta['delete'] = undefined;
      }
      else delta['delete'] = true;
    }
  }

  onNewItemCreate(delta:any) {
    this.mappedItems.addDelta(delta);
  }
}
