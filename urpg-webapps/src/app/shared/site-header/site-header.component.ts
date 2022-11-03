import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/v1/security/session.service';
import { Standalone } from 'src/app/standalone/Standalone';

@Standalone('urpg-site-header')
@Component({
  selector: 'urpg-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  @Output() userLoaded = new EventEmitter();
  loaded = false;
  username:string = null;
  searchText:string = "";
  searchType:string = "pokemon";

  constructor(private sessionService : SessionService,
    private router:Router) { }

  ngOnInit() {
    this.sessionService.refresh().subscribe(
      response => {
        this.username = response['username'];
        this.userLoaded.emit(null);
        this.loaded = true;
      },
      error => {
        console.log(error);
        this.userLoaded.emit(null);
        this.loaded = true;
      }
    )
  }

  search() {
    let url = `/${this.searchType}/${this.searchText}`;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([url]));
  }

  logout() {
    this.sessionService.logout().subscribe(
      response => {
        this.username = null;
      },
      error => {
        // do some error handling
      }
    )
  }
}