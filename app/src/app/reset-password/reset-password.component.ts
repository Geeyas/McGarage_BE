import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email: string = '';
  password: string = '';

  message: string = '';
  Successmessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  reset() {

  }
  clear() {
    this.message = '';
    this.Successmessage = '';
  }

}
