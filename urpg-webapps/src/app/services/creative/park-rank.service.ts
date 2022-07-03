import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkRankDelta } from 'src/app/models/creative/ParkRankDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class ParkRankService {
  path : string = '/parkRank';

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

  create(delta:ParkRankDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:ParkRankDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
