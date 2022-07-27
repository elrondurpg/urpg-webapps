import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { OwnedPokemon } from 'src/app/models/v1/stats/OwnedPokemon';
import { RestService } from 'src/app/services/v1/rest.service';

@Component({
  selector: 'stats-pokemon-full-pane',
  templateUrl: './pokemon-full-pane.component.html',
  styleUrls: ['./pokemon-full-pane.component.css']
})
export class PokemonFullPaneComponent implements OnInit {

  @Input() dbid!:number;
  @Output() exit = new EventEmitter();

  pokemon:OwnedPokemon;

  constructor(private service:RestService) { }

  ngOnInit(): void {
    console.log("Loading pokemon with DBID " + this.dbid);
    this.service.get(ApiConstants.OWNED_POKEMON_API, this.dbid).subscribe(pokemon => {
      this.pokemon = plainToClass(OwnedPokemon, pokemon);
      console.log(this.pokemon);
    });
  }

  doExit() {
    this.exit.emit();
  }

}
