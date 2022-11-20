import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-automations',
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.css']
})
export class AutomationsComponent implements OnInit {
  title = 'uigallery';
  ui_gallery:any = []
  all_ui_gallery:any = []
  tags = []
  counts = {}
  filter_tag = "";

  url = "https://api.ask-jennie.com/v1/automation/TYPE/list/";
  current_url = "https://api.ask-jennie.com/v1/automation/django-automations/list/";
  type_automation = "angular-ui-lib";

  ui_libs = [
    "django-automations"
  ];

  constructor(private http: HttpClient, private service: ServiceService) { }

  ngOnInit(): void {
    this.update_list();
    this.getData()
  }

  update_list() {
    this.get_ui_gallery().subscribe(
      data => {
        // let formatted_data = [];
        this.all_ui_gallery = [];
        data["payload"]["data"].forEach(element => {
          let type_automtion = ""
          if (element['type_automation'] === 'angular-ui-lib') {
            type_automtion = " ui-lib"
          } else {
            type_automtion = " automations"
          }
          element["code"] = "jennie " + element["stack"] + type_automtion + " download " +  element["app_name"]
          this.all_ui_gallery.push(element);
        });
        
        this.tags = data["payload"]["tags"];
        this.show_data()
      }
    )
  }

  show_data() {
    this.ui_gallery = [];
    this.all_ui_gallery.forEach(element => {
      if (this.filter_tag === '') {
        this.ui_gallery.push(element)
      } else {
        if (element["tag"] === this.filter_tag) {
          this.ui_gallery.push(element)
        }
      }
    });     
  }

  get_ui_gallery() {
    let req = this.http.get(this.current_url);
    return req;
  }

  showTagItem(name) {
    this.filter_tag = name;
    this.show_data();
  }

  add_filter(tag_name) {
    this.filter_tag = tag_name;
  }

  onTypeChanged(event) {    
    this.current_url = this.url.replace("TYPE", this.type_automation);
    console.log(this.type_automation, this.current_url, event);
    this.update_list();
  }

//pagination
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
