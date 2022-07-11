import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'automations';

  do_show_nav() {
    let loc_arr = window.location.href.split('/');
    if (loc_arr[loc_arr.length -1] === "login") {
      return false;
    }

    return true;
  }
}
