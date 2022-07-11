import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionmanagerService {
  BASE_URL = "http://localhost:8081/"
  LOGIN_ENDPOINT = "v1/login/";
  SIGNUP_ENDPOINT = "v1/signup/";
  LOGIN_STATUS_ENDPOINT = "v1/login-status/";
  STORAGE_KEY = "userinfo";
  constructor(private api:HttpClient) { }

  is_logged_in() {
    let stroage_info = localStorage.getItem(this.STORAGE_KEY);
    console.log(stroage_info);
    if (stroage_info == null) {
      return false;
    }

    let userInfo = JSON.parse(stroage_info);
    if (this.check_login_status(userInfo["token"])) {
      return true;
    }

    return false;
  }

  check_login_status(token:string) {
    return true;
  }

  login(loginDetails:any) {
    return this.api.post("http://127.0.0.1:8000/v1/login/", loginDetails);
  }

  signup(signup_details:any) {
    return this.api.post("http://127.0.0.1:8000/v1/signup/", signup_details);
  }

  store_login_info(data:any) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))
  }
}