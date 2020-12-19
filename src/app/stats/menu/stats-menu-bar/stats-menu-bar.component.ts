import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'urpg-stats-menu-bar',
  templateUrl: './stats-menu-bar.component.html',
  styleUrls: ['./stats-menu-bar.component.css']
})
export class StatsMenuBarComponent implements OnInit {

  @Output() tabChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showTab(tab: string) {
    this.tabChange.emit(tab);
    window.scroll(0,0);
  }

}
