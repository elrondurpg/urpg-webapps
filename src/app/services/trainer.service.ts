import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/Trainer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  path : string = '/stats/';
  private user : string = '';

  constructor(private http : HttpClient,
              private router : Router) { }

  getTrainer(name:string):Observable<any> {
    return this.http.get<{status:number, data:Trainer}>(environment.api + this.path + name);
  }

  login() {
    let state = Math.floor(Math.random() * 1000000000);
    this.http.post(environment.host + "/pokemonurpg-dot-com/php/setAuthenticationState.php", state).subscribe(res => {
      let url:string = environment.oauth2Url + 
        "?response_type=" + environment.oauth2ResponseType + 
        "&client_id=" + environment.oauth2ClientID + 
        "&scope=" + environment.oauth2Scope + 
        "&state=" + state + 
        "&redirect_uri=" + environment.oauth2RedirectUrl;
      window.location.href = url;
    });
  }

  initSession() {
    if (environment.name == "DEV") {
      this.user = "Elrond";
    }
    else {
      this.http.post('/pokemonurpg-dot-com/php/getSessionParameter.php', 'username', { responseType: 'text' }).subscribe( res => {
        if (res != undefined) {
          this.user = res;
        }
        else this.user = '';
      });
    }
  }

  getUser() {
    return this.user;
  }
}
