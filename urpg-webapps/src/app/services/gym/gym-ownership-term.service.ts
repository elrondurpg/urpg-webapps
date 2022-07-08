import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GymOwnershipTermDelta } from 'src/app/models/gym/GymOwnershipTermDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class GymOwnershipTermService {
  path : string = '/gymOwnershipTerm';

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  findByDbid(dbid:number):Observable<any> {
    return this.http.get(environment.api + this.path + `/${dbid}`);
  }

  findByName(gym:string, owner:string, openDate:Date):Observable<any> {
    return this.http.get(environment.api + this.path + `?gym=${gym}&owner=${owner}&openDate=${openDate}`);
  }

  create(delta:GymOwnershipTermDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:GymOwnershipTermDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}