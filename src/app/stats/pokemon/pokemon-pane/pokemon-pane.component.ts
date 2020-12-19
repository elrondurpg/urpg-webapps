import { Component, OnInit, Input } from '@angular/core';
import { PokemonBrief } from 'src/app/models/PokemonBrief';
import { environment } from 'src/environments/environment';
import { TypeService } from 'src/app/services/type.service';
import { OwnedPokemon } from 'src/app/models/stats/OwnedPokemon';

@Component({
  selector: 'urpg-pokemon-pane',
  templateUrl: './pokemon-pane.component.html',
  styleUrls: ['./pokemon-pane.component.css']
})
export class PokemonPaneComponent implements OnInit {

  @Input() pokemon:OwnedPokemon[];

  spriteBase:string = environment.spriteBase;
  nameFilter:string = undefined;
  types:string[];
  typeFilter:string = undefined;

  onlyShowFePokemon:boolean = false;
  onlyShowNfePokemon:boolean = false;
  onlyShowBoxPokemon:boolean = false;
  showJobPokemon:boolean = true;
  onlyShowUftPokemon:boolean = false;

  constructor(private typeService:TypeService) { }

  ngOnInit() { 
    this.typeService.getTypes().subscribe(types => this.types = types);
  }

  getSpritePath(pokemon : OwnedPokemon) {
    return `${this.spriteBase}${pokemon.species.dexno}${pokemon.species.getSuffix()}.gif`;
  }

  clearFilters() {
    this.nameFilter = undefined;
    this.typeFilter = undefined;

    this.onlyShowFePokemon = false;
    this.onlyShowNfePokemon = false;
    this.onlyShowBoxPokemon = false;
    this.showJobPokemon = true;
    this.onlyShowUftPokemon = false;
  }

}
