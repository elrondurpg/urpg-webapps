import { Component, OnInit } from '@angular/core';
import { PokedexEntry } from '../models/v1/pokedex/PokedexEntry';
import { plainToClass } from 'class-transformer';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/v1/rest.service';
import { ApiConstants } from '../constants/ApiConstants';

@Component({
  selector: 'urpg-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  page:PokedexEntry;

  constructor(private route:ActivatedRoute,
    private service:RestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.get(ApiConstants.POKEDEX_API, params['name'], null).subscribe(page => {
        this.page = plainToClass(PokedexEntry, page);
        this.page.collectAllForms();
        console.log("Printed from pokedex.component.ts: ");
        console.log(this.page);
      });
    });
  }
}
