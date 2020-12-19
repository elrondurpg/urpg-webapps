import { Pipe, PipeTransform } from '@angular/core';
import { PokemonPaneComponent } from '../pokemon-pane/pokemon-pane.component';

@Pipe({
  name: 'pokemonFilter',
  pure: false
})
export class PokemonFilterPipe implements PipeTransform {

  transform(pokemonList: any, filterOptions : PokemonPaneComponent): any {
    if (!pokemonList || !filterOptions) {
      return pokemonList;
    }

    return pokemonList.filter(pokemon => {
      let show:boolean = true;

      // if pokemon name starts with nameFilter
      if (filterOptions.nameFilter) {
        let nameFilter = filterOptions.nameFilter.toUpperCase();
        if (!pokemon.name || !pokemon.name.toUpperCase().startsWith(nameFilter)) {
          if (!pokemon.nickname || !pokemon.nickname.toUpperCase().startsWith(nameFilter)) {
            show = false;
          }
        }
      }

      // if pokemon type1 or type2 is typeFilter
      if (filterOptions.typeFilter && filterOptions.typeFilter != "NONE") {
        let typeFilter = filterOptions.typeFilter.toUpperCase();
        if (!pokemon.type1 || pokemon.type1.toUpperCase() != typeFilter) {
          if (!pokemon.type2 || pokemon.type2.toUpperCase() != typeFilter) {
            show = false;
          }
        }
      }

      // if pokemon is fe and onlyShowFePokemon is true
      if (filterOptions.onlyShowFePokemon) {
        if (!pokemon.fullyEvolved)
          show = false;
      }

      // if pokemon is nfe and onlyShowNfePokemon is true
      if (filterOptions.onlyShowNfePokemon) {
        if (pokemon.fullyEvolved)
          show = false;
      }

      // if pokemon is box and onlyShowBoxPokemon is true
      if (filterOptions.onlyShowBoxPokemon) {
        if (!pokemon.box)
          show = false;
      }


      // if pokemon is job and showJobPokemon is true
      if (!filterOptions.showJobPokemon) {
        if (pokemon.job)
          show = false;
      }

      // if pokemon is uft and onlyShowUftPokemon is true
      if (filterOptions.onlyShowUftPokemon) {
        if (!pokemon.uft)
          show = false;
      }

      return show;
    });
  }

}
