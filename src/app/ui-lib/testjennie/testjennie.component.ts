import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guide-sidbar',
  templateUrl: './guide-sidbar.component.html',
  styleUrls: ['./guide-sidbar.component.css']
})
export class GuideSidbarComponent implements OnInit {

  @Input() sidebar = []
  @Output() clicked_event = new EventEmitter();
  selected = 0;
  constructor() { }

  ngOnInit(): void {
  }

  return_clicked_event(event_info, i) {
    console.log(event_info)
    if (i != -1) {
      this.selected = i;
    }
    
    this.clicked_event.emit(event_info["readme_link"]);
  }

}
