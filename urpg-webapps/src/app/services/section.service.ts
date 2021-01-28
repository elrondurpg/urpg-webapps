import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { TestSections } from 'src/test/TestSections';
import { Section } from '../models/general/Section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  API = environment.api + "/section";
  FIND_ALL_API = this.API + "/all";

  constructor(private http : HttpClient) { }

  findAll() {
    if (environment.name == "DEV") {
      return of(TestSections.sections);
    }
    else {
      return this.http.get<Section[]>(this.FIND_ALL_API);
    }
  }
}
