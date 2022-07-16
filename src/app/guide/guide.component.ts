
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
  url = "https://raw.githubusercontent.com/Ask-Jennie/ask-jennie/release/0.6/tutorials/Installing-Jennie.md"
  guidemap:any;
  link_to_show = "";
  ngOnInit(): void {
    this.get_tutorials();
  }

  show_readme(link) {
    this.link_to_show = link;
    console.log(this.link_to_show);
  }

  get_tutorials() {
    this.sessions.get_turoails().subscribe(
      data => {
        console.log("Got Tutorials", data);
        this.guidemap = data["payload"];
        this.show_readme(this.guidemap[0].url);
      }
    )
  }
}
