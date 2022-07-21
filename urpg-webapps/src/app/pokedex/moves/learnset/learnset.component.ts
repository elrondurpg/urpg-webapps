import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokedexEntry } from 'src/app/models/v1/pokedex/PokedexEntry';
import { SpeciesAttack } from 'src/app/models/v1/species/SpeciesAttack';

@Component({
  selector: 'pokedex-learnset',
  templateUrl: './learnset.component.html',
  styleUrls: ['./learnset.component.css']
})
export class LearnsetComponent implements OnInit {
  @Input() page:PokedexEntry;
  @Output() hoveredMove = new EventEmitter();
  @Input() displayMove:SpeciesAttack;

  constructor() { }

  ngOnInit() {
    this.page.species.attacks.sort((a, b) => {
      if (a.attack.name < b.attack.name)
        return -1;
      else return 1;
    });
  }

  getAttacks(method:string) {
    return this.page.species.attacks.filter(attack => attack.method == method);
  }

  hoverMove(move:SpeciesAttack) {
    this.hoveredMove.emit(move);
  }
}
