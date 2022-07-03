import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GymDelta } from 'src/app/models/gym/GymDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  path : string = '/gym';

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  findAll():Observable<any> {
    return this.http.get(environment.api + this.path);
  }

  findByName(name:string):Observable<any> {
    return this.http.get(environment.api + this.path + `/${name}`);
  }

  create(delta:GymDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:GymDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
