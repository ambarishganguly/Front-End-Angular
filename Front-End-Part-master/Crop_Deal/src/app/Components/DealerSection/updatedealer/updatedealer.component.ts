import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'Service/userprofile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatedealer',
  templateUrl: './updatedealer.component.html',
  styleUrls: ['./updatedealer.component.css']
})
export class UpdatedealerComponent implements OnInit {
  userId: any
  constructor(private service: UserprofileService) { }

  ngOnInit(): void {
  }
  updateform = new FormGroup({

    userAddress: new FormControl('', [Validators.required]),
    userPhoneNo: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required]),


  })

  get form() {

    return this.updateform.controls;
  }
  changeRole(role: any) {
    console.log(role.target.value);
  }

  update() {
    this.userId = localStorage.getItem('userId')
    this.service.updateUserProfile(this.userId, this.updateform.value).subscribe();
    alert("updation successfull !");
  }

}
