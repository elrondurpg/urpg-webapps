import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'urpg-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private sessionService:SessionService) { }

  ngOnInit() {
  }

  login() {
    this.sessionService.login();
  }

}
