import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/v1/member/Member';

@Component({
  selector: 'urpg-match-history-pane',
  templateUrl: './match-history-pane.component.html',
  styleUrls: ['./match-history-pane.component.css']
})
export class MatchHistoryPaneComponent implements OnInit {
  @Input() member:Member;

  constructor() { }

  ngOnInit() {
  }

}
