import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { OwnedPokemon } from 'src/app/models/v1/stats/OwnedPokemon';
import { RestService } from 'src/app/services/v1/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'stats-pokemon-full-pane',
  templateUrl: './pokemon-full-pane.component.html',
  styleUrls: ['./pokemon-full-pane.component.css']
})
export class PokemonFullPaneComponent implements OnInit {

  @Input() dbid!:number;
  @Output() exit = new EventEmitter();

  modelBase:string = environment.modelBase;

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

  doEdit() {

  }

  getModelPath() {
    return `${this.modelBase}${this.pokemon.species.dexno}${this.pokemon.species.getSuffix()}.gif`;
  }

  getAbilities() {
    let abilities = this.createCommaSeparatedList(this.pokemon.species.abilities.filter(ability => !ability.hidden).map(ability => ability.ability.name));
    if (this.pokemon.ownedHiddenAbilities.length > 0) {
      abilities += ", ";
      abilities += this.createCommaSeparatedList(this.pokemon.ownedHiddenAbilities.map(ability => ability.name));
    }
    return abilities;
  }

  getDistinctMoves() {
    return this.pokemon.species.attacks
      .filter(attack => attack.method == "LEVEL-UP")
      .map(attack => attack.attack.name)
      .concat
      (
        this.pokemon.ownedExtraMoves.map(move => move.name)
      );
  }

  getMoves() {
    let moves = 
      this.createCommaSeparatedList
      (
        this.getDistinctMoves().sort()
      );
    return moves;
  }

  createCommaSeparatedList(strings:string[]) {
    let s = "";
    for (let i = 0; i < strings.length; i++) {
      s += strings[i];
      if (i < strings.length - 1) {
        s += ", ";
      }
    }
    return s;
  }

  getDistinctRibbonTypes() {
    return new Set(this.pokemon.earnedRibbons.map(record => record.generation.name + " " + record.rank.name + " " + record.attribute.name).sort());
  }

  getRibbonTypeQuantity(ribbonType) {
    let quantity = 0;
    this.pokemon.earnedRibbons
      .filter(record => ribbonType == record.generation.name + " " + record.rank.name + " " + record.attribute.name)
      .forEach(record => quantity += record.quantity);
    return quantity;
  }

  getWishlistAbilities() {
    return this.createCommaSeparatedList(this.pokemon.wishlistAbilities.map(ability => ability.ability.name));
  }

  getWishlistMoves() {
    return this.createCommaSeparatedList(this.pokemon.wishlistMoves.map(move => move.move.name));
  }
}
