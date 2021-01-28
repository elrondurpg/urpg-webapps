import { Component, OnInit, Input } from '@angular/core';
import { Attack } from 'src/app/models/attack/Attack';
import { SpeciesAttack } from 'src/app/models/species/SpeciesAttack';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pokedex-move-hints-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  @Input() displayMove:SpeciesAttack;
  iconBase = environment.iconBase;

  constructor() { }

  ngOnInit() {
  }

}
