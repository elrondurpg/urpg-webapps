import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/v1/pokedex/PokedexEntry';
import { Species } from 'src/app/models/v1/species/Species';

@Component({
  selector: 'pokedex-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;

  constructor() { }

  ngOnInit() {
    this.species = this.page.species;
  }

  isEmbellished(statName:string) {
    if (this.species.preMega == null) 
      return false;
    else {
      return this.species[statName] != this.species.preMega[statName];
    }
  }
}
