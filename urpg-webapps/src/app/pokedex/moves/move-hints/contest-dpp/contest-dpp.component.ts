import { Component, OnInit, Input } from '@angular/core';
import { SpeciesAttack } from 'src/app/models/species/SpeciesAttack';

@Component({
  selector: 'pokedex-move-hints-contest-dpp',
  templateUrl: './contest-dpp.component.html',
  styleUrls: ['./contest-dpp.component.css']
})
export class ContestDppComponent implements OnInit {
  @Input() displayMove:SpeciesAttack;

  constructor() { }

  ngOnInit() {
  }
  
  getScore() {
    if (this.displayMove.attack.dppContestMoveType != null) {
        if (this.displayMove.attack.dppContestMoveType.score > 0)
            return this.displayMove.attack.dppContestMoveType.score;
        else return 0;
    }
    else return 0;
  }

  getJam() {
      if (this.displayMove.attack.dppContestMoveType != null) {
          if (this.displayMove.attack.dppContestMoveType.jam > 0)
              return this.displayMove.attack.dppContestMoveType.jam;
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
