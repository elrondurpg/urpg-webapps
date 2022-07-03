import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObtainedDelta } from 'src/app/models/general/ObtainedDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class ObtainedService {
  path : string = '/obtained';

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  findAllNames():Observable<any> {
    return this.http.get(environment.api + this.path);
  }

  findByName(name:string):Observable<any> {
    return this.http.get(environment.api + this.path + `/${name}`);
  }

  create(delta:ObtainedDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:ObtainedDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
