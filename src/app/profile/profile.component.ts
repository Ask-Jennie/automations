import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionmanagerService } from '../services/sessionmanager.service';
import { ServiceService } from '../services/service.service';

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
  counts: any;
  automations: any;
  constructor(private http: HttpClient, private session:SessionmanagerService, private service: ServiceService) { }
  
  ngOnInit(): void {
    this.session.getProfileData().subscribe(data => {
      console.log("profile data -->", data);
      let userInfo = data["payload"]["user_info"];
      this.automations = data["payload"]["automations"];
      this.counts = data["payload"]["counts"];
      this.userProfession = userInfo["bio"];
      this.userCity = userInfo["city"];
      this.userEmail = userInfo["email"];
      this.userName = userInfo["fullname"]

    })

  }

  get_initials(fullname) {
    let arr_name = fullname.split(" ");
    let initals = "";
    arr_name.forEach(element => {
      initals += element.charAt(0);
    });
    return initals;
  }

  p:any;
  data:any=[];
  getData() {
    this.service.getData().subscribe(
      (data) => {
        this.data = data["payload"]["data"];
      }
    );
  }

}
