import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemDelta } from 'src/app/models/item/ItemDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  path : string = '/item';

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

  findByTypeIn(...types):Observable<any> {
    console.log(environment.api + this.path + `/type/${types}`);
    return this.http.get(environment.api + this.path + `/type/${types}`);
  }

  create(delta:ItemDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:ItemDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
