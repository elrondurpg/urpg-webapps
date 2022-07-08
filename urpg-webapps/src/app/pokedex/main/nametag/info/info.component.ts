import { Component, OnInit, Input } from '@angular/core';
import { AlteredForm } from 'src/app/models/pokedex/AlteredForm';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { Species } from 'src/app/models/species/Species';
import { environment } from 'src/environments/environment';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'pokedex-nametag-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class NametagInfoComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;
  alteredForms:AlteredForm[];
  formName:string;

  iconBase = environment.iconBase;

  constructor(private viewportScroller : ViewportScroller) { }

  ngOnInit() {
    this.species = this.page.species;
    this.alteredForms = this.page.alteredForms;
    for (let alteredForm of this.alteredForms) {
      if (alteredForm.species.name == this.species.name) {
        this.formName = alteredForm.species.formName;
      }
    }
  }

  setFormName(formName) {
    this.formName = formName;
  }

  anchorScroll(anchor:string) {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  
  getMegaText() {
    if (this.species.name.toUpperCase().indexOf("NECROZMA") == -1)
    {
        return "Mega Evolve";
    }
    return "Ultra Burst";
  }

  getMegaRingText() {
      if (this.species.name.toUpperCase().indexOf("NECROZMA") == -1)
      {
          return "Mega Ring + ";
      }
      return "";
  }

}
