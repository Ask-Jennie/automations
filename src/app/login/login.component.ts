import { Component, OnInit } from '@angular/core';
import { SessionmanagerService } from '../services/sessionmanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sessions:SessionmanagerService) {
    if (this.sessions.is_logged_in()) {
      window.location.href = "/";
    }
  }

  ngOnInit(): void {
  }

}
