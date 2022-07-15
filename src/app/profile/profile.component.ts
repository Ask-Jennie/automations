import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionmanagerService } from '../services/sessionmanager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfession: any;
  userCity:any;
  userEmail:any;
  userName:any;

  constructor(private http: HttpClient, private session:SessionmanagerService) { }
  
  ngOnInit(): void {
    this.session.getProfileData().subscribe(data => {
      console.log("profile data -->", data);
      let userInfo = data["payload"]["user_info"];
      this.userProfession = userInfo["bio"];
      this.userCity = userInfo["city"];
      this.userEmail = userInfo["email"];
      this.userName = userInfo["fullname"]

    })

  }

}
