import { Component, OnInit } from '@angular/core';
import { SessionmanagerService } from '../services/sessionmanager.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  subject = "";
  type = "feedback";
  message = "";
  error = "";
  feedbacksubmitted = false;
  constructor(private session: SessionmanagerService) { }

  ngOnInit(): void {
  }

  submit_feedback() {
    console.log(this.subject, this.type, this.message);
    this.error = "";
    if (this.subject.length < 3) {
      this.error = "Invalid Subject";
      return;
    }
    if (this.message.length < 50) {
      this.error = "Invalid Message, Minimum 50 characters.";
      return;
    }
    let data = {
      "subject": this.subject, "message": this.message, "type": this.type
    }
    // this.api.submit_feedback(data).subscribe(
    //   data => {
    //     this.feedbacksubmitted = true;
    //   }, 
    //   error => {
    //     alert("Some Error occured Try again later");
    //     this.feedbacksubmitted = true;
    //   }
    // )


    this.session.send_feedback(data).subscribe(
      data => {
        this.feedbacksubmitted = true;
      }, 
      error => {
        alert("Some Error occured Try again later");
        this.feedbacksubmitted = true;
      }
    )
    
  }

}