import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UrpgObjectModel } from 'src/app/models/ObjectModel';

@Component({
  selector: 'resources-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() create = new EventEmitter();
  @Output() load = new EventEmitter();
  @Output() save = new EventEmitter();
  filter:string = undefined;
  @Input() items:any[];
  @Input() changes:boolean = false;
  @Input() filterable:boolean = true;
  @Input() complex:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getSortedItems() {
    if (!this.complex) {
      return this.getSortedSimpleItems();
    }
    else {
      return this.getSortedComplexItems();
    }
  }

  getSortedSimpleItems() {
    return this.items.sort( (a, b) => {
      if ( a.toLowerCase() < b.toLowerCase() ){
        return -1;
      }
      if ( a.toLowerCase() > b.toLowerCase() ){
        return 1;
      }
      return 0;
    });
  }

  getSortedComplexItems() {
    return this.items.sort((a: UrpgObjectModel, b: UrpgObjectModel) => {
      let aName = a.getDisplayName().toLowerCase();
      let bName = b.getDisplayName().toLowerCase();

      if (aName < bName){
        return -1;
      }
      if (aName > bName){
        return 1;
      }
      return 0;
    });
  }

  emitCreate() {
    this.create.emit(null);
  }

  emitLoad() {
    this.load.emit(this.filter);
  }

  emitSave() {
    this.save.emit(null);
  }

}
