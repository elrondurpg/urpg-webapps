import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OwnedPokemon } from 'src/app/models/v1/stats/OwnedPokemon';
import { RestService } from 'src/app/services/v1/rest.service';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { Member } from 'src/app/models/v1/member/Member';

@Component({
  selector: 'stats-pokemon-pane',
  templateUrl: './pokemon-pane.component.html',
  styleUrls: ['./pokemon-pane.component.css']
})
export class PokemonPaneComponent implements OnInit {

  @Input() member!:Member;
  @Output() viewFullPokemon = new EventEmitter();

  spriteBase:string = environment.spriteBase;
  nameFilter:string = undefined;
  types:string[];
  typeFilter:string = undefined;

  onlyShowBoxPokemon:boolean = false;
  showJobPokemon:boolean = true;
  onlyShowUftPokemon:boolean = false;

  constructor(private service:RestService) { }

  ngOnInit() { 
    this.service.get(ApiConstants.TYPE_API).subscribe(types => this.types = types);
  }

  getSpritePath(pokemon : OwnedPokemon) {
    return `${this.spriteBase}${pokemon.species.dexno}${pokemon.species.getSuffix()}.gif`;
  }

  clearFilters() {
    this.nameFilter = undefined;
    this.typeFilter = undefined;

    this.onlyShowBoxPokemon = false;
    this.showJobPokemon = true;
    this.onlyShowUftPokemon = false;
  }

  doViewFullPokemon(pokemon:OwnedPokemon) {
    this.viewFullPokemon.emit(pokemon);
  }

}
