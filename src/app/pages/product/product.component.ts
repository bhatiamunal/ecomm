import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../Angular_API/calling-api.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;
  products:any;
  userData:any;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) {
    console.log(this.myservice.productId)
    console.log(this.myservice.allProducts)
    window.scrollTo(0, 0)
    if(!this.myservice.allProducts || !this.myservice.productId){
      this.route.navigate(['/']); 
    }
    else {
      this.products =this.myservice.allProducts.slice(0,4)
      this.filterProduct()
    }
   }
   filterProduct(){
    this.product = this.myservice.allProducts.filter((data:any)=>{
      return  data.id == this.myservice.productId
    })
    if( this.product.length>0){
     
      this.product =this.product[0];
    }
    
   }
  ngOnInit(): void {
  }
  productId(productIdGet:any):void{
    
    this.myservice.productId = productIdGet
    this.filterProduct();
    
  
    
  }
  saveData(){
    if(!this.myservice.loginStatus){
      this.route.navigate(['/login']); 
    }
    else{
      this.userData = localStorage.getItem('profile')
      let data = JSON.parse(this.userData);
      const d = new Date();
      let pdata =[{
        userid :data.id,
        orderId:this.myservice.productId,
        dateOfOrder:d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear(),
        qty:1
      }]
      localStorage.setItem('lastPurchase',JSON.stringify(pdata[0]))
      this.myservice.submitData('addOrder',pdata).subscribe(data=>{
        this.route.navigate(['/orderStatus']); 
      })
    }
  
  }
}
