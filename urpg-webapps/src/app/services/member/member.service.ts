import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberDelta } from 'src/app/models/member/MemberDelta';
import { SessionService } from '../security/session.service';
import { QueryStringBuilder } from 'src/app/shared/QueryStringBuilder';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  path : string = '/member';

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  findNamesBy(queryParams:any):Observable<any> {
    let queryString = QueryStringBuilder.buildFromOptionalParameters(queryParams, "username", "bot");
    let urlString = environment.api + this.path + queryString;
    return this.sessionService.sendAuthenticatedRequest("GET", urlString);
  }

  findByName(name:string):Observable<any> {
    return this.http.get(environment.api + this.path + `/${name}`);
  }

  create(delta:MemberDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:MemberDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
