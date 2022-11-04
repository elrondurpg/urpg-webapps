import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/v1/security/session.service';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from 'src/app/app.module';

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
    let prefix = AppModule.useRouting ? "urpg-webapps" : "";
    this.sessionService.login(prefix + this.route['_routerState'].snapshot.url);
  }

}
