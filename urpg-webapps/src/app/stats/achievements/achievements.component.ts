import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/models/general/Section';
import { Member } from 'src/app/models/member/Member';

@Component({
  selector: 'stats-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  @Input() member:Member;
  @Input() sections:Section[];

  constructor() { }

  ngOnInit() {
  }

}
