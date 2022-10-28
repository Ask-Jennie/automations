import { Component, OnInit } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window["load_google_auth"](this.callback, "google-auth-btn", "1056792203955-kghc5agsvk4ufd7h7ebu09re5cvtorts.apps.googleusercontent.com");
  }

  callback(response:any) {
    console.log(response);
  }

}
