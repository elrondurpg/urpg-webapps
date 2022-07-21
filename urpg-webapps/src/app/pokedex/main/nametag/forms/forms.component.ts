import { Component, Input, OnInit, Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';
import { PokedexEntry } from 'src/app/models/v1/pokedex/PokedexEntry';
import { Species } from 'src/app/models/v1/species/Species';
import { DisplayableForm } from 'src/app/models/v1/pokedex/DisplayableForm';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'pokedex-nametag-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class NametagFormsComponent implements OnInit {
  @Input() page:PokedexEntry;
  species:Species;
  forms:DisplayableForm[];
  @Output() changeDisplayedForm = new EventEmitter();

  firstFormInWindow = 0;

  iconBase = environment.iconBase;

  constructor(private router:Router) { }

  ngOnInit() {
    this.species = this.page.species;
    this.forms = this.page.allForms;

    this.initFormWindow();
  }

  initFormWindow() {
    let alteredForms = this.page.alteredForms;
    for (let i = 0; i < alteredForms.length; i++) {
      let alteredForm = alteredForms[i];
      if (alteredForm.species.name == this.page.species.name) {
        this.page.currentDisplayedForm = i;
        if (i == 0) {
            this.firstFormInWindow = 0;
        }
        else {
          this.firstFormInWindow = i - 1;
        }

        let boundary = this.forms.length - 4;
        if (this.firstFormInWindow > boundary) {
          this.firstFormInWindow = boundary;
        }
      }
    }
  }

  moveWindow(spacesToMove:number) {
    let result = this.firstFormInWindow + spacesToMove;
    if (result <= 0) 
      this.firstFormInWindow = 0;
    else if (result >= this.forms.length - 4)
      this.firstFormInWindow = this.forms.length - 4;
    else this.firstFormInWindow = result;
  }

  getFormsInWindow() {
    return this.forms.filter(
        item => 
          this.forms.indexOf(item) >= this.firstFormInWindow 
          && this.forms.indexOf(item) < this.firstFormInWindow + 4
      );
  }

  getImagePath(form:DisplayableForm) {
    return `${this.iconBase }${ this.species.dexno }${ form.getSuffix().toLowerCase() }.png`;
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