import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../Angular_API/calling-api.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myAccount:any
  loginStatusHd:boolean=false
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) {
    this.menuCheck()
  }
  menuCheck(){
    this.myservice.loginCheck()
    if(this.myservice.loginStatus){
      this.loginStatusHd = this.myservice.loginStatus
      this.myAccount=[{'name':'Profile','link':'myProfile'},{'name':'MyOrder','link':'myOrder'}]
    }
    else{
      this.loginStatusHd = false
      this.myAccount=[{'name':'login','link':'login'},{'name':'signup','link':'signup'}]
    }
  }
  ngOnInit(): void {
  }
  logoutFn(){
    this.myservice.logout();
    this.menuCheck()
  }
}
