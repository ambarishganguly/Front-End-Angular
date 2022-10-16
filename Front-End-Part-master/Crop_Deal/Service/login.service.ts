import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'Models/login.model';
import{Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly baseUrl ='https://localhost:7214/api/Login';
  constructor(private http:HttpClient, private router:Router) { }
  tokenresp:any;

  formData: Login = new Login();

  ProceedLogin(usercred:any){
    return this.http.post(this.baseUrl,usercred);
  }
  IsLogged() {
    return localStorage.getItem("token") != null;
  }
  GetToken() {
    return localStorage.getItem("token") || '';
  }
  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/this');
  }

}
