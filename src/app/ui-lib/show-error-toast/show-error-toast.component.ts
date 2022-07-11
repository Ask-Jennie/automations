import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error-toast',
  templateUrl: './show-error-toast.component.html',
  styleUrls: ['./show-error-toast.component.css']
})
export class ShowErrorToastComponent implements OnInit {
  @Input() error_msg = "show-error-toast works!";
  constructor() { }

  ngOnInit(): void {
  }

}
