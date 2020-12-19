import { Component, OnInit, Input } from '@angular/core';
import { SpeciesAttack } from 'src/app/models/species/SpeciesAttack';

@Component({
  selector: 'pokedex-move-hints-contest-oras',
  templateUrl: './contest-oras.component.html',
  styleUrls: ['./contest-oras.component.css']
})
export class ContestOrasComponent implements OnInit {
  @Input() displayMove:SpeciesAttack;

  constructor() { }

  ngOnInit() {
  }
  
  getScore() {
    if (this.displayMove.attack.orasContestMoveType != null) {
        if (this.displayMove.attack.orasContestMoveType.score > 0)
            return this.displayMove.attack.orasContestMoveType.score;
        else return 0;
    }
    else return 0;
  }

  getJam() {
      if (this.displayMove.attack.orasContestMoveType != null) {
          if (this.displayMove.attack.orasContestMoveType.jam > 0)
              return this.displayMove.attack.orasContestMoveType.jam;
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
