import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleDelta } from 'src/app/models/member/RoleDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  path : string = '/role';

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

  create(delta:RoleDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:RoleDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
