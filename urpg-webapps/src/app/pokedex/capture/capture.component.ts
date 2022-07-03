import { Component, Input, OnInit } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { Species } from 'src/app/models/species/Species';

@Component({
  selector: 'pokedex-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;
  morphicRequirements = {
    "Easiest": 10,
    "Simple": 20,
    "Medium": 35,
    "Hard": 50,
    "Complex": 70,
    "Demanding": 90
  };

  constructor() { }

  ngOnInit() {
    this.species = this.page.species;
  }

  getMorphicRequirement() {
    if (this.species.storyRank && this.species.storyRank.name) {
      if (this.page.evolutionFamily === undefined || this.page.evolutionFamily.length <= 0 || this.page.evolutionFamily[0].length == 0) {
          return this.morphicRequirements[this.species.storyRank.name];
      }
      else {
          for (var i = 0; i < this.page.evolutionFamily[0].length; i++) {
              if (this.page.evolutionFamily[0][i].name == this.species.name) {
                  return this.morphicRequirements[this.species.storyRank.name];
              }
          }
      }
    }
    else return -1;
}

}
