import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/v1/security/session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'urpg-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private sessionService:SessionService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    
  }

  login() {
    this.sessionService.login("urpg-webapps" + this.route['_routerState'].snapshot.url);
  }

}
