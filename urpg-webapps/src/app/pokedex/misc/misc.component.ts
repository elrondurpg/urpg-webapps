import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/v1/pokedex/PokedexEntry';

@Component({
  selector: 'pokedex-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {
  @Input() page:PokedexEntry;

  constructor() { }

  ngOnInit() {
    
  }

}
