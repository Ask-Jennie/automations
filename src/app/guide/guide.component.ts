
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionmanagerService } from '../services/sessionmanager.service';


@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GuideComponent implements OnInit {

  constructor(private sessions: SessionmanagerService) { }
  
  guidemap:any;
  link_to_show = "";
  ngOnInit(): void {
    this.get_tutorials();
  }

  get_tutorials() {
    this.sessions.get_turoails().subscribe(
      data => {
        console.log("Got Tutorials", data);
        this.guidemap = data["payload"];
        this.show_readme(this.guidemap[0]["submenu"][0]);
      }
    )
  }

  show_readme(event) {
    this.link_to_show = event["readme_link"];
  }
}
