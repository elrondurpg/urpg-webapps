import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/member/Member';

@Component({
  selector: 'stats-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() member:Member;
  itemTypes:string[] = new Array();
  nameFilter:string = "";
  typeFilter:string = "";

  constructor() { }

  ngOnInit() {
    this.getItemTypes();
  }

  getItemTypes() {
    for (let item of this.member.items) {
      if (this.itemTypes.indexOf(item.item.type) == -1) {
        this.itemTypes.push(item.item.type);
      }
    }
    this.itemTypes.sort((a,b) => {
      if (a < b) 
        return -1;
      else return 1;
    });
  }

  getFilteredItemTypes() {
    return this.itemTypes.filter(type => {
      return (this.typeFilter == "" || this.typeFilter == type) && this.getFilteredItemsByType(type).length > 0;
    });
  }

  getFilteredItemsByType(type:string) {
    return this.member.items.filter(item => {
      if (this.nameFilter != "" && item.item.name.toUpperCase().indexOf(this.nameFilter.toUpperCase()) != 0) {
        return false;
      }
      return item.item.type == type;
    });
  }

  updateNameFilter(filter:string) {
    this.nameFilter = filter;
  }

  updateTypeFilter(filter:string) {
    this.typeFilter = filter;
  }
}
