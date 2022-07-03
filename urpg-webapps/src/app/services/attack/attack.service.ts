import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AttackDelta } from 'src/app/models/attack/AttackDelta';
import { SessionService } from '../security/session.service';
import { plainToClass } from 'class-transformer';
import { ContestComboDelta } from 'src/app/models/contest/ContestComboDelta';

@Injectable({
  providedIn: 'root'
})
export class AttackService {
  path : string = '/attack';

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

  create(delta:AttackDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:AttackDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
