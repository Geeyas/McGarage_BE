import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = '';


  messageErr: string = '';
  messageSucc: string = '';

  constructor() { }
  ngOnInit(): void {
  }

  async reset() {
    this.messageSucc = "Sending Message...."
    await emailjs.send("service_54de1kl", "template_sbbgu6d", {
      email: this.email,
    }, "mk5iIxu0NFYaVopqn").then((result: EmailJSResponseStatus) => {
      this.email = "";
      this.messageSucc = "Message Sent Successfully!!";
    }, (error) => {
      this.messageErr = "Error in sending message. Please try again";
    });
  }

  clear() {
    this.messageErr = '';
    this.messageSucc = '';
  }

}
