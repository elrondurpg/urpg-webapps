import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { SpeciesAttack } from 'src/app/models/species/SpeciesAttack';

@Component({
  selector: 'pokedex-move-hints',
  templateUrl: './move-hints.component.html',
  styleUrls: ['./move-hints.component.css']
})
export class MoveHintsComponent implements OnInit {
  @Input() displayMove:SpeciesAttack;
  moveHintsType:string ="battle";

  constructor() { }

  ngOnInit() {
  }

}
