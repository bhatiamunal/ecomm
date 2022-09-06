import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import{ CallingAPIService} from './../../../Angular_API/calling-api.service';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  LoginStatus:any;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('adminLoginData');
    this.route.navigate(['/admin/login']);
  }

}
