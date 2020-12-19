import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stats-inventory-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class InventoryFilterComponent implements OnInit {
  @Input() types:string[];
  nameFilter:string = "";
  typeFilter:string = "";
  @Output() changeNameFilter = new EventEmitter();
  @Output() changeTypeFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateNameFilter() {
    this.changeNameFilter.emit(this.nameFilter);
  }

  updateTypeFilter() {
    this.changeTypeFilter.emit(this.typeFilter);
  }

}
