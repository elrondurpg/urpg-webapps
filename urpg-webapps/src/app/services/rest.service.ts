import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './security/session.service';
import { UrpgObjectModel } from '../models/ObjectModel';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  get(resource:string, pathParams?: string[] | number | string, queryParams?:{ key:string, value:any }[]):Observable<any> {
    return this.http.get(environment.api + resource + this.buildPathParams(pathParams) + this.buildQueryString(queryParams));
  }

  post(resource:string, pathParams?: string[] | number | string, payload?:UrpgObjectModel):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + resource + this.buildPathParams(pathParams), payload);
  }

  put(resource:string, pathParams?: string[] | number | string, payload?:UrpgObjectModel):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + resource + this.buildPathParams(pathParams), payload);
  }

  buildPathParams(pathParams?: string[] | number | string) {
    let result = "";
    if (pathParams != null) {
      if (Array.isArray(pathParams)) {
        pathParams.forEach(param => result += "/" + param);
      }
      else return "/" + pathParams;
    }
    return result;
  }

  buildQueryString(queryParams?:{ key:string, value:any }[]) {
    let queryString = "";
    if (queryParams != null) {
      if (queryParams.length > 0) queryString += "?";
      for (let i = 0; i < queryParams.length; i++) {
        queryString += queryParams[i].key + "=" + queryParams[i].value;
      }
    }
    return queryString;
  }

  /*post(resource:string, delta:ObjectDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + resource, delta);
  }*/

  // put(resource:string, id:number, delta:ObjectDelta):Observable<any> {
  //   return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + resource + "/" + id, delta);
  // }
}