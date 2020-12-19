import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { Species } from 'src/app/models/species/Species';

@Component({
  selector: 'pokedex-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;

  constructor() { }

  ngOnInit() {
    this.species = this.page.species;
    this.species.abilities.sort((a,b) => {
      if (a.hidden && !b.hidden)
        return 1;
      else if (!a.hidden && b.hidden)
        return -1;
      else return 0;
    });
  }

}
