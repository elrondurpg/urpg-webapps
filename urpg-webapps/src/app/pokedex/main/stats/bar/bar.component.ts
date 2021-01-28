import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'pokedex-stats-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class StatsBarComponent implements OnInit {
  @Input() label:string;
  @Input() value:number;
  @Input() embellished:boolean;
  width:SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.width = this.sanitizer.bypassSecurityTrustStyle(this.getStatBarSize());
  }

  getStatBarClass() {
    let benchmark = "HP" == this.label ? 540 : 450;

    if (this.value >= (benchmark * .66)) {
        return 'success';
    }
    else if (this.value >= (benchmark * .5)) {
        return 'warning';
    }
    else return 'danger';
  }

  getStatBarSize() {
    let benchmark = "HP" == this.label ? 540 : 450;
    let size;    

    if (this.value >= benchmark) {
      size = 100;
    }
    else {
      size = Math.floor((this.value / benchmark) * 100);
    }

    return `${size}%`;
  }

}
