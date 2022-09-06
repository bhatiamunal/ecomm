import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../Angular_API/calling-api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) {
    this.vieProduct()
  }
  vieProduct(){

    this.myservice.getData("products").subscribe((data) => {
      this.products =   data;
   
      this.products = this.products.slice(0, 4)
      console.log(this.products)
      this.myservice.allProducts =data
    })
  }
  productId(productIdGet:any):void{
    this.myservice.productId = productIdGet
    
    this.route.navigate(['/Product']); 
  
    
  }
  ngOnInit(): void {
  }

}
