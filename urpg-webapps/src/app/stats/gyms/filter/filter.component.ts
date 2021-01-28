import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stats-gyms-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class GymsFilterComponent implements OnInit {
  nameFilter:string = "";
  activeFilter:boolean = false;
  @Output() changeNameFilter = new EventEmitter();
  @Output() changeActiveFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateNameFilter() {
    this.changeNameFilter.emit(this.nameFilter);
  }

  updateActiveFilter() {
    this.changeActiveFilter.emit(this.activeFilter);
  }

}
