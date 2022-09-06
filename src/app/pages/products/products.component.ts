import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../Angular_API/calling-api.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) {
    this.vieProduct()
   }
  vieProduct(){
    this.myservice.getData("products").subscribe((data) => {
      this.products =   data;
    })
  }
  ngOnInit(): void {
  }

}
