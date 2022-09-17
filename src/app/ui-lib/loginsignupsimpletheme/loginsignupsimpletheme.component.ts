
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionmanagerService } from 'src/app/services/sessionmanager.service';

@Component({
  selector: 'app-loginsignupsimpletheme',
  templateUrl: './loginsignupsimpletheme.component.html',
  styleUrls: ['./loginsignupsimpletheme.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginsignupsimplethemeComponent implements OnInit {
  show_login = true;
  login_email = "";
  login_password = "";

  error = "";
  show_error = false;

  signup_full_name = "";
  signup_email = "";
  signup_password = "";

  constructor(private session:SessionmanagerService) { }

  ngOnInit(): void {
  }

  validateEmail(email:string) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

  signup() {
    if (this.validateEmail(this.signup_email) == false) {
      this.show_error_msg("Invalid Email Address");
      return false;
    }
    else if (this.signup_full_name.length < 6) {
      this.show_error_msg("Invalid Email Address");
      return false;
    } 
    else if (this.signup_full_name.length < 6) {
      this.show_error_msg("Invalid Password, minimum 6 characters");
      return false;
    }

    let signupDetails = {
      "fullname": this.signup_full_name,
      "email": this.signup_email,
      "password": this.signup_password
    }
    this.continue_to_signup(signupDetails);
    return true;
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
    this.continue_to_login(loginDetails);
    return true;
  }



  show_error_msg(msg:string) {
    this.show_error = true;
    this.error = msg;
    let self = this;
    setTimeout(function() {
      self.dismiss_error();
    }, 1500)
  }

  dismiss_error() {
    this.show_error = false;
    this.error = "";
  }

  continue_to_login(loginDetails:any) {
    this.session.login(loginDetails).subscribe(
      (success) => {
        let resp:any = success;
        this.session.store_login_info(resp);
        window.location.href = "/";
      },
      (error) => {
        this.show_error_msg(error.error.message);
      }
    );
  }

  continue_to_signup(signupDetails:any) {
    this.session.signup(signupDetails).subscribe(
      (success) => {
        let resp:any = success;
        window.location.href = "/signup-success";
      },
      (error) => {
        this.show_error_msg(error.error.message);
      }
    );
  }
}
