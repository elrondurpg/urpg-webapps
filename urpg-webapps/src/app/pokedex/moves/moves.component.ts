import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { SpeciesAttack } from 'src/app/models/species/SpeciesAttack';

@Component({
  selector: 'pokedex-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  @Input() page:PokedexEntry;
  displayMove:SpeciesAttack;

  constructor() { }

  ngOnInit() {
  }

  hoverMove(move:SpeciesAttack) {
    this.displayMove = move;
  }

}
