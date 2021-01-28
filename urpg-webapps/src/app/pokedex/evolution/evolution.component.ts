import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { Species } from 'src/app/models/species/Species';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pokedex-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;
  iconBase = environment.iconBase;

  constructor() { }

  ngOnInit() {
    this.species = this.page.species;
  }
  
  evolveString(species:Species)
  {
      var method = species.evolutionMethod;
      var evolutionFamily = this.page.evolutionFamily;
      var exp = 0;

      if (evolutionFamily[2].length > 0 && species.name != "Mr. Mime")
          exp = 5;
      else exp = 7;

      if (method != null)
      {
          if (method.indexOf("Level Up") != -1)
          {
              method = method.replace("Level Up", "Gain " + exp + " EXP");
          }
          else
          {
              method = "Gain " + exp + " EXP + " + method;
          }
      }
      else return '-';

      return method;
  }

}
