import { Component, OnInit } from '@angular/core';
import { SessionmanagerService } from '../services/sessionmanager.service';

@Component({
  selector: 'app-continue-with-google',
  templateUrl: './continue-with-google.component.html',
  styleUrls: ['./continue-with-google.component.css']
})
export class ContinueWithGoogleComponent implements OnInit {
  GoogleClientID = "1056792203955-kghc5agsvk4ufd7h7ebu09re5cvtorts.apps.googleusercontent.com";
  constructor(private api: SessionmanagerService) {
    if (this.api.is_logged_in()) {
      window.location.href = "/";
    }
  }

  ngOnInit(): void {
    window["load_google_auth"](this.callback, "google-auth-btn", this.GoogleClientID, this);
  }

  continue(credentials){
    console.log(credentials)
    this.api.loginviagoogle(
      {
        "credentials": credentials
      }
    ).subscribe(
      data => {
        this.api.store_login_info(data["payload"]);
        window.location.reload();
      }
    )
  };

  callback(response:any, obj) {
    obj.continue(response.credential);
  }
}
