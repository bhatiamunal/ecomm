import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../Angular_API/calling-api.service'
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  data:any
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) { 
    myservice.loginCheck()
    if(!myservice.loginStatus){
      this.route.navigate(['/']);
    }
    else{
      this.data = localStorage.getItem('profile');
      this.data = JSON.parse(this.data);
      console.log(this.data)
    }
    
  }

  ngOnInit(): void {
    
    
  }

}
