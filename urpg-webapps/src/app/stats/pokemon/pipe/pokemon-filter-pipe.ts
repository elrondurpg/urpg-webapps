import { Pipe, PipeTransform } from '@angular/core';
import { OwnedPokemon } from 'src/app/models/v1/stats/OwnedPokemon';
import { PokemonPaneComponent } from '../pokemon-pane/pokemon-pane.component';

@Pipe({
  name: 'pokemonFilter',
  pure: false
})
export class PokemonFilterPipe implements PipeTransform {

  transform(pokemonList: OwnedPokemon[], filterOptions : PokemonPaneComponent): any {
    if (!pokemonList || !filterOptions) {
      return pokemonList;
    }

    return pokemonList.filter(pokemon => {
      let show:boolean = true;

      // if pokemon name starts with nameFilter
      if (filterOptions.nameFilter) {
        let nameFilter = filterOptions.nameFilter.toUpperCase().trim();
        if (pokemon.species.name.toUpperCase().indexOf(nameFilter) == -1) {
          if (!pokemon.nickname || pokemon.nickname.toUpperCase().indexOf(nameFilter) == -1) {
              show = false;
          } 
        }
      }

      // if pokemon type1 or type2 is typeFilter
      if (filterOptions.typeFilter && filterOptions.typeFilter != "undefined" && filterOptions.typeFilter != "NONE") {
        let typeFilter = filterOptions.typeFilter.toUpperCase();
        if (pokemon.species.type1.name.toUpperCase() != typeFilter) {
          if (!pokemon.species.type2 || pokemon.species.type2.name.toUpperCase() != typeFilter) {
            show = false;
          }
        }
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
