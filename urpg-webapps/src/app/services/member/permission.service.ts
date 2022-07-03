import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PermissionDelta } from 'src/app/models/member/PermissionDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  path : string = '/permission';

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  findAllNames():Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("GET", environment.api + this.path);
  }

  findByName(name:string):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("GET", environment.api + this.path + `/${name}`);
  }

  create(delta:PermissionDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:PermissionDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
