import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../security/session.service';
import { FlagDelta } from 'src/app/models/general/FlagDelta';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  path : string = '/flag';

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

  create(delta:FlagDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:FlagDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
