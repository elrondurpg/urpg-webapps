import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokedex/PokedexEntry';
import { Species } from 'src/app/models/species/Species';
import { DisplayableForm } from '../models/DisplayableForm';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'pokedex-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Input() page:PokedexEntry;
  forms:DisplayableForm[];
  species:Species;
  spriteBase = environment.spriteBase;
  @Output() changeDisplayedForm = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {
    this.forms = this.page.allForms;
    this.page.attacksThatDifferByForm.sort((a,b) => {
      if (a < b) return -1;
      else return 1;
    });
    for(let form of this.forms) {
      let species = form.getSpecies();
      species.abilities.sort((a,b) => {
          if(a.hidden && !b.hidden)
            return 1;
          else if (b.hidden && !a.hidden) 
            return -1;
          else return 0;
      });
    }

    this.species = this.page.species;
  }

  getImagePath(form:DisplayableForm) {
    return `${this.spriteBase }${ this.species.dexno }${ form.getSuffix().toLowerCase() }.gif`;
  }

  clickFormTab(form:DisplayableForm, currentDisplayedForm:number) {
    let url = form.getSpeciesName() != this.species.name ? "/pokemon/" + form.getSpeciesName() : "";
    if (url != "") {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([url]));
    }
    else {
      this.page.currentDisplayedForm = currentDisplayedForm;
      this.changeDisplayedForm.emit(form);
    }
  }

}
