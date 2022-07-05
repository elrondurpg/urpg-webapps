import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './security/session.service';
import { ObjectDelta } from 'src/app/models/ObjectDelta';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  get(resource:string):Observable<any> {
    return this.http.get(environment.api + resource);
  }

  getByName(resource:string, name:string):Observable<any> {
    return this.http.get(environment.api + resource + `/${name}`);
  }

  post(resource:string, delta:ObjectDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + resource, delta);
  }

  put(resource:string, id:number, delta:ObjectDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + resource + "/" + id, delta);
  }
}