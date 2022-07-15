import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionmanagerService {
  BASE_URL = "https://api.ask-jennie.com/"
  LOGIN_ENDPOINT = this.BASE_URL + "v1/login/";
  SIGNUP_ENDPOINT = this.BASE_URL + "v1/signup/";
  LOGIN_STATUS_ENDPOINT =this.BASE_URL +  "v1/login-status/";
  PROFILE_ENDPOINT = this.BASE_URL + "v1/profile/";
  FEEDBACK_ENDPOINT = this.BASE_URL + "v1/feedbacks/";
  TUTORIALS_ENDPOINT = this.BASE_URL + "v1/tutorials/";
  STORAGE_KEY = this.BASE_URL + "userinfo";
  constructor(private api:HttpClient) { }

  get_auth_header() {
    let storage_info = localStorage.getItem(this.STORAGE_KEY);
    let token = JSON.parse(storage_info)["token"];
    return { 'token': token, 'Content-type': 'application/json'};
  }

  is_logged_in() {
    let storage_info = localStorage.getItem(this.STORAGE_KEY);
    console.log(storage_info);
    if (storage_info == null) {
      return false;
    }

    let userInfo = JSON.parse(storage_info);
    if (this.check_login_status(userInfo["token"])) {
      return true;
    }

    return false;
  }

  check_login_status(token:string) {
    return true;
  }

  login(loginDetails:any) {
    return this.api.post(this.LOGIN_ENDPOINT, loginDetails);
  }

  signup(signup_details:any) {
    return this.api.post("http://127.0.0.1:8000/v1/signup/", signup_details);
  }

  store_login_info(data:any) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))
  }

  remove_login_info(){
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getProfileData() {
    let storage_info = localStorage.getItem(this.STORAGE_KEY);
    let userId = JSON.parse(storage_info)["_id"];
    let token = JSON.parse(storage_info)["token"];
    const headers = { 'token': token};
   return this.api.get<any>(this.PROFILE_ENDPOINT + "?id=" + userId, { headers });
  }

  send_feedback(inputData) {
    const headers = this.get_auth_header();
    return this.api.post<any>(this.FEEDBACK_ENDPOINT, inputData, { headers });
  }

  get_turoails() {
    const headers = this.get_auth_header();
    return this.api.get<any>(this.TUTORIALS_ENDPOINT, { headers });
  }

}
