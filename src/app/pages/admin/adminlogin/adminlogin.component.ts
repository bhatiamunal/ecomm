import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../../Angular_API/calling-api.service'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  userForm!:FormGroup ;
  LoginStatus:any;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      'userEmail': [''],
      'password':[''],
     
    });
    this.loginCheck();
  }
  onSubmit(){
    this.myservice.adminLogin(this.userForm.value)
    this.loginCheck()
  }
  loginCheck(){
    this.LoginStatus =  localStorage.getItem('adminLoginData');
    if(this.LoginStatus==0){
      this.route.navigate(['/admin/viewproducts']);
    }
  }
}
