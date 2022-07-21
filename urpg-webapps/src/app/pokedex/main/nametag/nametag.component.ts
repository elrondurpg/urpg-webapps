import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DisplayableForm } from 'src/app/models/v1/pokedex/DisplayableForm';
import { PokedexEntry } from 'src/app/models/v1/pokedex/PokedexEntry';

@Component({
  selector: 'pokedex-nametag',
  templateUrl: './nametag.component.html',
  styleUrls: ['./nametag.component.css']
})
export class NametagComponent implements OnInit {
  @Input() page:PokedexEntry;
  displayedForm:DisplayableForm;
  @ViewChild('info', {static: false}) infoComponent;

  constructor() { }

  ngOnInit() {
  }

  changeDisplayedForm(form:DisplayableForm) {
    this.displayedForm = form;
    this.infoComponent.setFormName(form.getFormName());
  }

}
