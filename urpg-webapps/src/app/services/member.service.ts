import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Member } from '../models/member/Member';
import { TestMember } from 'src/test/TestMember';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  path : string = '/member/';

  constructor(private http : HttpClient) { }

  findByName(name:string):Observable<any> {
    if (environment.name == "DEV") {
      return of(TestMember.member);
    }
    else {
      return this.http.get<Member>(environment.api + this.path + name);
    }
  }
}
