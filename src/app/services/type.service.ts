import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../models/species/Type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  path : string = '/type/';

  constructor(private http : HttpClient) { }

  getTypes():Observable<any> {
    return this.http.get<Type>(environment.api + this.path);
  }
}
