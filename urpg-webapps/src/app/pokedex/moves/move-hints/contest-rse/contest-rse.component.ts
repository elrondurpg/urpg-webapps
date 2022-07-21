import { Component, OnInit, Input } from '@angular/core';
import { SpeciesAttack } from 'src/app/models/v1/species/SpeciesAttack';

@Component({
  selector: 'pokedex-move-hints-contest-rse',
  templateUrl: './contest-rse.component.html',
  styleUrls: ['./contest-rse.component.css']
})
export class ContestRseComponent implements OnInit {
  @Input() displayMove:SpeciesAttack;

  constructor() { }

  ngOnInit() {
  }
  
  getScore() {
    if (this.displayMove.attack.rseContestMoveType != null) {
        if (this.displayMove.attack.rseContestMoveType.score > 0)
            return this.displayMove.attack.rseContestMoveType.score;
        else return 0;
    }
    else return 0;
  }

  getJam() {
      if (this.displayMove.attack.rseContestMoveType != null) {
          if (this.displayMove.attack.rseContestMoveType.jam > 0)
              return this.displayMove.attack.rseContestMoveType.jam;
          else return 0;
      }
      else return 0;
  }

  getNumberArray(number) {
    let numbers = new Array();
    if (number > 0) {
      for (let i = 0; i < number; i++) {
        numbers.push(i);
      }
    }
    return numbers;
  }

}
