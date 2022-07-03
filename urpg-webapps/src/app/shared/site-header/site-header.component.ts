import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { SessionService } from 'src/app/services/security/session.service';

@Component({
  selector: 'urpg-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  username:string = null;
  searchText:string = "";
  searchType:string = "pokemon";

  constructor(private sessionService : SessionService,
    private router:Router) { }

  ngOnInit() {
    this.sessionService.refresh().subscribe(
      response => {
        this.username = response['username'];
      },
      error => {
        console.log(error);
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
