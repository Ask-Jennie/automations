import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guide-sidbar',
  templateUrl: './guide-sidbar.component.html',
  styleUrls: ['./guide-sidbar.component.css']
})
export class GuideSidbarComponent implements OnInit {

  @Input() sidebar = []
  @Output() clicked_event = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  return_clicked_event(event_info) {
    this.clicked_event.emit(event_info);
  }

}
