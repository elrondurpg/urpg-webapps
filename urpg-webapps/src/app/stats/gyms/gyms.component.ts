import { Component, OnInit, Input } from '@angular/core';
import { Gym } from 'src/app/models/gym/Gym';
import { PokemonBrief } from 'src/app/models/PokemonBrief';
import { OwnedPokemon } from 'src/app/models/stats/OwnedPokemon';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'stats-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {
  @Input() gyms:Gym[];
  nameFilter:string = "";
  activeFilter:boolean = false;
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  spriteBase:string = environment.spriteBase;

  constructor() { }

  ngOnInit() {
  }

  getFilteredGyms() {
    return this.gyms.filter(gym => {
      return this.nameFilter == "" || gym.name.toUpperCase().indexOf(this.nameFilter.toUpperCase()) == 0;
    });
  }

  getFormattedGymOpenDate(gym:Gym) {
    let date = gym.currentOwnerRecord.openDate;
    return `${this.monthNames[date.getUTCMonth()]} ${date.getUTCDate()}${this.getDateOrdinal(date.getUTCDate())}, ${date.getUTCFullYear()}`;
  }

  getDateOrdinal(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  updateNameFilter(filter:string) {
    this.nameFilter = filter;
  }

  updateActiveFilter(filter:boolean) {
    this.activeFilter = filter;
  }

  getSpritePath(pokemon : OwnedPokemon) {
    console.log(pokemon);
    return `${this.spriteBase}${pokemon.species.dexno}${pokemon.species.getSuffix()}.gif`;
  }

}
