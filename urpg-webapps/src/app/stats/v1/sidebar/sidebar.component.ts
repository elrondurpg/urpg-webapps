import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatsPage } from 'src/app/constants/StatsPage';
import { Member } from 'src/app/models/v1/member/Member';

@Component({
  selector: 'stats-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()  member! :Member;
  @Output() change  = new EventEmitter();
  StatsPage = StatsPage;

  constructor() { }

  ngOnInit(): void {
  }

  showTab(tab: string) {
    this.change.emit(tab);
    window.scroll(0,0);
  }

  getRoles() {
    let s = "";
    if (this.member.roles !== undefined) {
      for (let i = 0; i < this.member.roles.length; i++) {
        s += this.member.roles[i].name;
        if (i != this.member.roles.length - 1) {
          s += ", ";
        }
      }
    }
    return s;
  }

}
