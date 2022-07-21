import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Attack } from 'src/app/models/v1/attack/Attack';
import { SpeciesAttack } from 'src/app/models/v1/species/SpeciesAttack';

@Component({
  selector: 'pokedex-learnset-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class LearnsetCategoryComponent implements OnInit {
  @Input() label:string;
  @Input() attacks:SpeciesAttack[];
  @Input() displayMove:SpeciesAttack;
  @Output() hoveredMove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hoverMove(attack:SpeciesAttack) {
    this.hoveredMove.emit(attack);
  }

}
