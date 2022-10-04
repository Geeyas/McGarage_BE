import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  url: string = '/api/forgotPassword/resetPassword';

  email: string = '';
  password: string = '';

  message: string = '';
  Successmessage: string = '';

  allData: any = [];
  emailCk: any = []

  constructor(private http: HttpClient, private router: Router) { }

  async ngOnInit() {
    await this.http.get("/api/signup").subscribe((response) => {
      this.allData = response;
      this.allData.forEach((data) => {
        this.emailCk.push(data.email);
      })
    }, (err) => {
      console.log(err);
    })

  }
  async reset() {
    if (this.password == "") {
      this.message = "Password must be entered";
      return;
    } else if (this.emailCk.includes(this.email)) {
      var checks = this.email + this.password;
      await this.http.put(this.url, { email: this.email, password: this.password, checks: checks }).subscribe(
        (res) => {
          this.Successmessage = "Password Updated Successfully";
          setTimeout(() => {
            this.router.navigate(['./login']);
          }, 1500)
        }
      )
    } else {
      this.message = "No such email id found";
    }
  }
  clear() {
    this.message = '';
    this.Successmessage = '';
  }

}
