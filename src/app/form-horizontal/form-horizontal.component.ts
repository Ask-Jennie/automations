import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-horizontal',
  templateUrl: './form-horizontal.component.html',
  styleUrls: ['./form-horizontal.component.css']
})
export class FormHorizontalComponent implements OnInit {

  name = "";
  company = "";
  email = "";
  phone = "";
  msg = "";

  constructor() { }

  ngOnInit(): void {
  }

  send(){

    let data = {

      name:this.name,
      company: this.company,
      email: this.email,
      phone: this.phone,
      msg: this.msg,
    }
    console.log(data);


  }

}
