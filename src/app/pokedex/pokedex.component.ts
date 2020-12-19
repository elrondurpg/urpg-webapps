import { Component, OnInit } from '@angular/core';
import { PokedexEntry } from '../models/pokedex/PokedexEntry';
import { plainToClass } from 'class-transformer';
import { PokedexService } from '../services/pokedex.service';
import { ActivatedRoute } from '@angular/router';
import { DisplayableForm } from './models/DisplayableForm';

@Component({
  selector: 'urpg-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  page:PokedexEntry;

  constructor(private route:ActivatedRoute,
    private pokedexService:PokedexService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokedexService.findByName(params['name']).subscribe(page => {
        this.page = plainToClass(PokedexEntry, page);
        this.page.collectAllForms();
        console.log("Printed from pokedex.component.ts: ");
        console.log(this.page);
      });
    });
  }
}
