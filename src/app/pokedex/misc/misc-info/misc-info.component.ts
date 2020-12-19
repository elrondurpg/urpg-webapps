import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { Species } from 'src/app/models/species/Species';

@Component({
  selector: 'pokedex-misc-info',
  templateUrl: './misc-info.component.html',
  styleUrls: ['./misc-info.component.css']
})
export class MiscInfoComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;

  constructor() { }

  ngOnInit() {
    this.species = this.page.species;
  }

  getGrassKnotDamage() {
    if (this.species.weight < 10)
        return 20;
    else if (this.species.weight < 25)
        return 40;
    else if (this.species.weight < 50)
        return 60;
    else if (this.species.weight < 100)
        return 80;
    else if (this.species.weight < 200)
        return 100;
    else
        return 120;
  }

  toImperialHeight() {
      var inches = Math.floor(this.species.height * 39.3701);
      var feet = Math.floor(inches / 12);
      inches = inches % 12;

      return "" + feet + "'" + inches + "\"";
  }

  toImperialWeight() {
      var pounds = (this.species.weight * 2.20462).toFixed(1);
      return pounds;
  }
}
