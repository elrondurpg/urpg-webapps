import { Component, OnInit, Input } from '@angular/core';
import { PokedexEntry } from 'src/app/models/v1/pokedex/PokedexEntry';

@Component({
  selector: 'pokedex-type-matchups',
  templateUrl: './type-matchups.component.html',
  styleUrls: ['./type-matchups.component.css']
})
export class TypeMatchupsComponent implements OnInit {

  @Input() page:PokedexEntry;

  constructor() { }

  ngOnInit() {
    this.page.typeMatchups.sort((a, b) => {
      if (a.type.dbid < b.type.dbid)
        return -1;
      else return 1;
    });
  }
  
  matchupClass(multiplier)
  {
      switch (multiplier)
      {
          case 0: return "type-box-0";
          case 0.5: return "type-box-50";
          case 1: return "type-box-100";
          case 0.25: return "type-box-25";
          case 2: return "type-box-200";
          case 4: return "type-box-400";
      }
  }

  fraction(decimal) {
    if (decimal == '0')
        return '0';
    else if (decimal == '0.25')
        return '\xBC';
    else if (decimal == '0.5')
        return '\xBD';
    else if (decimal == '1')
        return '1';
    else if (decimal == '2')
        return '2';
    else if (decimal == '4')
        return '4';
};

}
