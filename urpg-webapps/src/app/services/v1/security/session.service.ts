import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/models/v1/requests/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private static AUTH_STATE_API = environment.sessionApi + '/setAuthenticationState.php';
  private static SESSION_REFRESH_API = environment.sessionApi + '/refreshSession.php';
  private static LOGOUT_API = environment.sessionApi + '/logout.php';
  private static WITH_CREDENTIALS_OPTIONS = 
    {
      withCredentials: true
    };

  private username:string;

  constructor(private http:HttpClient) { }

  getLoggedInUsername() {
    return this.username;
  }

  login(returnUrl:string) {
    let state = Math.floor(Math.random() * 1000000000);
    this.http.post(SessionService.AUTH_STATE_API, new LoginRequest(state, returnUrl), SessionService.WITH_CREDENTIALS_OPTIONS).subscribe(
      response => {
        window.location.href = 
          response['oauth2Url'] + 
          "?response_type=" + response['oauth2ResponseType'] + 
          "&client_id=" + response['oauth2ClientId'] + 
          "&scope=" + response['oauth2Scope'] + 
          "&state=" + state + 
          "&redirect_uri=" + response['oauth2RedirectUri']
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

  sendAuthenticatedRequest(method:string, url:string, payload:any = null):Observable<any> {
    let input = {
      "method": method,
      "url": url,
      "payload": payload
    };
    return this.http.post(environment.sessionApi + "/sendAuthenticatedRequest.php", input, SessionService.WITH_CREDENTIALS_OPTIONS);
  }
}
