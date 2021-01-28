import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PokedexEntry } from '../models/pokedex/PokedexEntry';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  path : string = '/pokemon/';

  constructor(private http : HttpClient,
    private router : Router) { }

  findByName(name:string):Observable<any> {
    return this.http.get<PokedexEntry>(environment.api + this.path + name);
  }
}
