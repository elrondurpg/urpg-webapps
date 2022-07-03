import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageDelta } from 'src/app/models/image/ImageDelta';
import { SessionService } from '../security/session.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  path : string = '/image';

  constructor(
    private http : HttpClient,
    private sessionService : SessionService
  ) { }
  
  create(delta:ImageDelta):Observable<any> {
    return this.sessionService.sendAuthenticatedRequest("POST", environment.api + this.path, delta);
  }
}
