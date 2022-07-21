import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/v1/pokedex/PokedexEntry';
import { Species } from 'src/app/models/v1/species/Species';

@Component({
  selector: 'pokedex-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() page:PokedexEntry;

  constructor() { }

  ngOnInit() {
  }

}
