import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../../Angular_API/calling-api.service'
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productData:any
LoginStatus:any;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) {
    this.vieProduct()
  }
  vieProduct(){
    this.LoginStatus =  localStorage.getItem('adminLoginData');
    if(this.LoginStatus!=0){
      this.route.navigate(['/admin/login']);
    }
    this.myservice.getData("products").subscribe((data) => {
      this.productData =   data;
      
    })
  }
  deleteItem(data:Number){
    let pdata = "http://localhost:9191/delete";
    
    this.myservice.deleteData(pdata,data).subscribe((data) => {
      this.productData = data
      console.log(data)
    }, err =>    this.vieProduct())};
    
  
  ngOnInit(): void {
  }

}