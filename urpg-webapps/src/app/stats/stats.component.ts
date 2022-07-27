import { Component, HostListener, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Member } from '../models/v1/member/Member';
import { plainToClass } from 'class-transformer';
import { Section } from '../models/v1/general/Section';
import { RestService } from '../services/v1/rest.service';
import { ApiConstants } from '../constants/ApiConstants';
import { StatsPage } from '../constants/StatsPage';
import { OwnedPokemon } from '../models/v1/stats/OwnedPokemon';

@Component({
  selector: 'urpg-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public tab:string;
  public member:Member;
  public sections:Section[];

  public resizeTimeout;

  public pokemonDbid:number;

  @ViewChild('header', {static: false})
  header: ElementRef;

  @ViewChild('content', {static: false})
  content: ElementRef;

  @ViewChild('menuBar', {static:false})
  menuBar: ElementRef;

  StatsPage = StatsPage;

  constructor(private service : RestService,
    private renderer: Renderer2) { }

  userLoaded() {
    this.tab = "achievements";
    this.service.get(ApiConstants.MEMBER_API, "Elrond", null).subscribe(member => {
      this.member = plainToClass(Member, member);
      console.log("Printed from stats/stats.component.ts:");
      console.log(this.member);
    });
    this.service.get(ApiConstants.SECTION_API).subscribe((sections : Section[]) => {
      this.sections = plainToClass(Section, sections);
    });
  }

  ngOnInit() {
  }

  /*ngAfterViewChecked(): void {
    this.updateContentPadding();
  }*/

  showTab(tab: string) {
    this.tab = tab;
  }

  doViewFullPokemon(pokemon:OwnedPokemon) {
    this.pokemonDbid = pokemon.dbid;
    this.tab = "PokemonFull";
  }

  doExitFullPokemon() {
    this.pokemonDbid = undefined;
    this.tab = StatsPage.POKEMON;
  }
/*
  @HostListener('window:resize')
  onWindowResize() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout((() => {
        this.updateContentPadding();
        
      }).bind(this), 500);
  }

  updateContentPadding() {
    if (this.header !== undefined) {
      let height = this.header.nativeElement.offsetHeight;
      this.renderer.setStyle(this.content.nativeElement, 'margin-top', `${height}px`);
      this.renderer.setStyle(this.menuBar.nativeElement, 'margin-top', `${height+56}px`);
    }
  }
*/
}
