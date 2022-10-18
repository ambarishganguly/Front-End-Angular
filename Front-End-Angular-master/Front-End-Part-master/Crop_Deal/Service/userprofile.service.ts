import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from 'Models/userprofile.model';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }

  formData: UserProfile = new UserProfile();

  baseUrl='https://localhost:7214/api/UserProfile';

  postUserProfile(){
    return this.http.post(this.baseUrl,this.formData)
  }
}
