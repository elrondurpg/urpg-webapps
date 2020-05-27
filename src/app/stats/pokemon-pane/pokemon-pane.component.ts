import { Component, OnInit, Input } from '@angular/core';
import { PokemonBrief } from 'src/app/models/PokemonBrief';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'urpg-pokemon-pane',
  templateUrl: './pokemon-pane.component.html',
  styleUrls: ['./pokemon-pane.component.css']
})
export class PokemonPaneComponent implements OnInit {

  @Input() pokemon:PokemonBrief[];
  spriteBase:string = environment.spriteBase;

  constructor() { }

  ngOnInit() {
    console.log(this.pokemon);
  }

  getSpritePath(pokemon : PokemonBrief) {
    return `${this.spriteBase}${pokemon.dexno}${pokemon.suffix()}.gif`;
  }

}
