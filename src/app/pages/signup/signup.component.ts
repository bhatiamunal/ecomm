import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../Angular_API/calling-api.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm!:FormGroup ;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      'userName': [''],
      'userEmail': [''],
      'phoneNumber':  [''],
      'password':[''],
      'address': [''],

     
    });
    this.myservice.loginCheck()
    if(this.myservice.loginStatus){
      this.route.navigate(['/']);
    }
   
   
  }
  
  onSubmit(){
    console.log(this.userForm.value)
       
    
    let pdata = [{
      //id:this.productForm.value.pid,
      name:this.userForm.value.userName,
      email:this.userForm.value.userEmail,
      pNumber :this.userForm.value.phoneNumber,
      password:this.userForm.value.password,
      address:this.userForm.value.address
    }];
    // pdata =[pdata]
    
     this.myservice.submitData("addUser",pdata).subscribe((data) => {
        // this.persondata = Array.from(Object.keys(data), k=>data[k]);
        console.log(data);
        this.userForm.reset();

        this.route.navigate(['/login']); // navigate to other page
  
     });
  }

}
