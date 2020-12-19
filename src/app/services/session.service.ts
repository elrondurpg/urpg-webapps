import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../requests/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private static AUTH_STATE_API = environment.sessionApi + '/api/setAuthenticationState.php';
  private static SESSION_REFRESH_API = environment.sessionApi + '/api/refreshSession.php';
  private static LOGOUT_API = environment.sessionApi + '/api/logout.php';
  private static WITH_CREDENTIALS_OPTIONS = 
    {
      withCredentials: true
    };

  username:string;

  constructor(private http : HttpClient) { }

  getLoggedInUsername() {
    return this.username;
  }

  login() {
    let state = Math.floor(Math.random() * 1000000000);
    this.http.post(SessionService.AUTH_STATE_API, new LoginRequest(state), SessionService.WITH_CREDENTIALS_OPTIONS).subscribe(
      response => {
        window.location.href = 
          environment.oauth2Url + 
          "?response_type=" + environment.oauth2ResponseType + 
          "&client_id=" + environment.oauth2ClientID + 
          "&scope=" + environment.oauth2Scope + 
          "&state=" + state + 
          "&redirect_uri=" + environment.oauth2RedirectUrl
      },
      error => {
        // do some error handling
        
      });
  }

  refresh() {
    return this.http.post(SessionService.SESSION_REFRESH_API, null, SessionService.WITH_CREDENTIALS_OPTIONS);
  }

  logout() {
    return this.http.post(SessionService.LOGOUT_API, null, SessionService.WITH_CREDENTIALS_OPTIONS);
  }
}
