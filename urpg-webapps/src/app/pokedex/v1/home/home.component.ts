import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'pokedex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterText:string;

  constructor(private router:Router,
    private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Ultradex - Home : URPG");
  }

  search(text) {
    let url = `/pokemon/${text}`;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([url]));
  }

}
