import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient) { }
  apiurl='https://localhost:7214/api/Login';

  ProceedLogin(usercred:any){
    return this.http.post(this.apiurl,usercred);
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  GetToken(){
   return localStorage.getItem('token')||'';
  }
  HaveAccess(){
    var loggintoken=localStorage.getItem('token')||'';
    var _extractedtoken=loggintoken.split('.')[1];
    var _atobdata=atob(_extractedtoken);
    var _finaldata=JSON.parse(_atobdata);
    if(_finaldata.role=='admin'){
      return true
    }else{
      alert('access denied');
      return false
    }
  }
}
