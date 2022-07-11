
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionmanagerService } from 'src/app/services/sessionmanager.service';

@Component({
  selector: 'app-signin-with-img',
  templateUrl: './signin-with-img.component.html',
  styleUrls: ['./signin-with-img.component.css']
})

export class SigninWithImgComponent implements OnInit {
  show_login = true;
  login_email = "";
  login_password = "";

  error_msg = "";
  constructor(private session:SessionmanagerService) { }

  ngOnInit(): void {
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
        this.session.store_login_info(data);
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
