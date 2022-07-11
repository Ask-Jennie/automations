import { Component, OnInit } from '@angular/core';
import { guidemap } from './guide'


@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor() { }
  url = "https://raw.githubusercontent.com/Ask-Jennie/ask-jennie/release/0.6/tutorials/Installing-Jennie.md"
  guidemap = guidemap;
  link_to_show = guidemap[0].url;
  ngOnInit(): void {
    console.log(guidemap);
    
  }

  show_readme(link) {
    this.link_to_show = link;
  }
}
