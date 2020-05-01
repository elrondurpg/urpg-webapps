import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'urpg-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private tab:string;

  constructor() { }

  ngOnInit() {
    this.tab = "pokemon";
  }

  showTab(tab: string) {
    this.tab = tab;
  }

}
