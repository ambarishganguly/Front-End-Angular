import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'Service/login.service';
import { Router } from '@angular/router';
import { AuthService } from 'Service/auth.service';
import { Login } from 'Models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  UserProfileid: any;
  editdata: any;
  responsedata: any;

  constructor(public service: AuthService, private route:Router) {
    localStorage.clear();
   }
   Login = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
          localStorage.setItem('token',this.responsedata.token);
          localStorage.getItem('token');
          this.route.navigate(['']);
        } else{
          alert('login Failed');
        }

      });
    }
  }


  // onSubmit(form: NgForm){
  //   this.service.postLogin().subscribe(
  //     (res)=>{
  //       console.log('submitted Successfully to database');
  //     },
  //     (err)=>{
  //       console.log('error');
  //     }
  //   )
  // }

 

}
