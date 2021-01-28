import { Component, Input, OnInit } from '@angular/core';
import { AlteredForm } from 'src/app/models/pokedex/AlteredForm';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { Species } from 'src/app/models/species/Species';
import { DisplayableForm } from 'src/app/pokedex/models/DisplayableForm';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pokedex-nametag-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class NametagSpriteComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;
  forms:DisplayableForm[];

  modelBase = environment.modelBase;

  constructor() { }

  ngOnInit() {
    this.species = this.page.species;
    this.forms = this.page.allForms;
  }

  getCurrentImageTag() {
    return this.page.getCurrentDisplayedFormSuffix();
  }

}
