import { Component } from '@angular/core';
import { SessionmanagerService } from './services/sessionmanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'automations';

  constructor(private session:SessionmanagerService) {
    
  }

  logout() {
    this.session.remove_login_info();
    window.location.href = "/login"
  }

  do_show_nav() {
    let loc_arr = window.location.href.split('/');
    if (loc_arr[loc_arr.length -1] === "login" || loc_arr[loc_arr.length -1] === "signup" || loc_arr[loc_arr.length -1] === "signup-success") {
      return false;
    }

    return true;
  }
}
