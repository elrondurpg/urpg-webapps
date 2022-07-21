import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/v1/member/Member';

@Component({
  selector: 'urpg-stats-header',
  templateUrl: './stats-header.component.html',
  styleUrls: ['./stats-header.component.css']
})
export class StatsHeaderComponent implements OnInit {

  @Input() trainer:Member;
  
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() { }

  ngOnInit() {
  }

  getRoles() {
    let s = "";
    if (this.trainer.roles !== undefined) {
      for (let i = 0; i < this.trainer.roles.length; i++) {
        s += this.trainer.roles[i].name;
        if (i != this.trainer.roles.length - 1) {
          s += ", ";
        }
      }
    }
    return s;
  }

  getJoinDate() {
    let date = new Date(this.trainer.joinDate);

    return `${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

}
