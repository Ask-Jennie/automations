import { Component } from '@angular/core';
import { SessionmanagerService } from './services/sessionmanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'automations';
  skip_urls = [
    "continue", "login", "signup", "signup-success"
  ]

  constructor(private session:SessionmanagerService) {
    
  }

  logout() {
    this.session.remove_login_info();
    window.location.href = "/login"
  }

  do_show_nav() {
    let loc_arr = window.location.href.split('/');
    let sub_url = loc_arr[loc_arr.length -1];
    if (this.skip_urls.indexOf(sub_url) !== -1) {
      return false;
    }

    return true;
  }
}
