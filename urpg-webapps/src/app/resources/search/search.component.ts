import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'resources-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() create = new EventEmitter();
  @Output() findByName = new EventEmitter();
  @Output() save = new EventEmitter();
  filter:string = undefined;
  @Input() items:string[];
  @Input() changes:boolean = false;
  @Input() filterable:boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  emitCreate() {
    this.create.emit(null);
  }

  emitFindByName() {
    this.findByName.emit(this.filter);
  }

  emitSave() {
    this.save.emit(null);
  }

}
