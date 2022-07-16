import { Component, OnInit } from '@angular/core';
import { SessionmanagerService } from 'src/app/services/sessionmanager.service';

@Component({
  selector: 'app-signup-with-img',
  templateUrl: './signup-with-img.component.html',
  styleUrls: ['./signup-with-img.component.css']
})
export class SignupWithImgComponent implements OnInit {
  name:string = "";
  email:string = "";
  password:string = "";

  error_msg = "";
  constructor(private sessions:SessionmanagerService) { }

  ngOnInit(): void {
  }

  validateEmail(email:string) 
  {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
  }

  signup() {
    if (this.name.length < 3) {
      this.show_error_msg("Invalid Name, minimum 3 characters");
      return false;
    }
    if (this.validateEmail(this.email) == false) {
      this.show_error_msg("Invalid Email Address");
      return false;
    }
    if (this.password.length < 6) {
      this.show_error_msg("Invalid Password, minimum 6 characters");
      return false;
    }
    let signupDetails = {
      "fullname": this.name,
      "email": this.email,
      "password": this.password,
      "bio": "",
      "city": ""
    }
    this.sessions.signup(signupDetails).subscribe(
      data => {
        window.location.href = "/signup-success";
      }
    );
    return true;
  }

  show_error_msg(msg:string) {
    this.error_msg = msg;
    setTimeout(() => {
      this.error_msg = "";
    }, 1500);
  }

}
