import { Component, Input, OnInit } from '@angular/core';
import { Species } from 'src/app/models/species/Species';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pokedex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() prev:Species;
  @Input() next:Species;
  iconBase = environment.iconBase;

  constructor() { }

  ngOnInit() {  }

}
