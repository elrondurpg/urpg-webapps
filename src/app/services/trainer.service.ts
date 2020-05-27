import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/Trainer';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  path : string = '/stats/';

  constructor(private http : HttpClient) { }

  getTrainer(name:string):Observable<any> {
    return this.http.get<{status:number, data:Trainer}>(environment.api + this.path + name);
  }
}
