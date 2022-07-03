import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OwnedPokemonDelta } from 'src/app/models/stats/OwnedPokemonDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class OwnedPokemonService {
  path : string = '/ownedPokemon';

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }

  findByDbid(dbid:number):Observable<any> {
    return this.http.get(environment.api + this.path + `/${dbid}`);
  }

  create(delta:OwnedPokemonDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }

  update(dbid:number, delta:OwnedPokemonDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("PUT", environment.api + this.path + "/" + dbid, delta);
  }
}
