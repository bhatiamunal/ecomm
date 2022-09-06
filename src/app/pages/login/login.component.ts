import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../Angular_API/calling-api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) {
    this.myservice.loginCheck()
    if(this.myservice.loginStatus){
      this.route.navigate(['/']);
    }
   }
  userForm!:FormGroup ;
  pdata:any;
  userData:any;
  ngOnInit(): void {
    this.userForm = this.fb.group({
      'userEmail': [''],
      'password':[''],
     
    });
  }
  onSubmit(){
        this.myservice.getData("user").subscribe((data) => {
        this.pdata = data
        let users = this.pdata.filter((ele:any)=>{
          return ele.email == this.userForm.value.userEmail &&  ele.password == this.userForm.value.password
        })
        if(users.length==1){
          this.myservice.loginStatus=true
          this.myservice.setKeyValue('userName',this.userForm.value.userEmail)
          this.userData ={
            'id':users[0].id,
            'name':users[0].name,
            'email':users[0].email,
            'pNumber':users[0].pNumber
          }
          this.myservice.setKeyValue('profile',JSON.stringify(this.userData));
          this.route.navigate(['/']);
        }
     });
  }
}
