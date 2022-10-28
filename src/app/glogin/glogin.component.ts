import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionmanagerService } from 'src/app/services/sessionmanager.service';
declare var window: any;
declare var response:any;
@Component({
  selector: 'app-glogin',
  templateUrl: './glogin.component.html',
  styleUrls: ['./glogin.component.css']
})
export class GloginComponent implements OnInit {
  show_login = true;
  login_email = "";
  login_password = "";

  error_msg = "";
  constructor(private session:SessionmanagerService) { 
    
  }

  callback(resp:any) {
    response = resp;
    console.log(response);
  }

  ngOnInit(): void {
    window["load_google_auth"](this.callback, "google-auth-btn", "1056792203955-kghc5agsvk4ufd7h7ebu09re5cvtorts.apps.googleusercontent.com");
  }

  validateEmail(email:string) 
  {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
  }

  login() {
    if (this.validateEmail(this.login_email) == false) {
      this.show_error_msg("Invalid Email Address");
      return false;
    }
    else if (this.login_password.length < 6) {
      this.show_error_msg("Invalid Password, minimum 6 characters");
      return false;
    }
    let loginDetails = {
      "email": this.login_email,
      "password": this.login_password
    }
    this.continue_with_login(loginDetails);
    return true;
  }

  continue_with_login(loginDetails) {
    this.session.login(loginDetails).subscribe(
      data => {
        this.session.store_login_info(data["payload"]);
        window.location.href = "/";
      },
      error=> {
        if(error.error.message) {
          this.show_error_msg(error.error.message);
        }
        // 
      }
    )
  }



  show_error_msg(msg:string) {
    this.error_msg = msg;
    setTimeout(() => {
      this.error_msg = "";
    }, 1500);
  }

}
