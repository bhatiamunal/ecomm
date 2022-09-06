import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import{ CallingAPIService} from './../../../Angular_API/calling-api.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!:FormGroup ;
  title = 'imgtobase64';
  myimage!: Observable<any>;
  base64code1!: any;
  base64code2!: any;
  base64code3!: any;
  LoginStatus:any;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) {
 
   }
  ngOnInit(): void {
    this.LoginStatus =  localStorage.getItem('adminLoginData');
    if(this.LoginStatus!=0){
      this.route.navigate(['/admin/login']);
    }
    this.productForm = this.fb.group({
      'pid': [''],
      'pname': [''],
      'price':  [''],
      'Qty':[''],
      'image1': [''],
      'image2': [''],
      'image3': [''],

     
    });
  }


  onSubmit(){
    
    
    let pdata = [{
      //id:this.productForm.value.pid,
      name:this.productForm.value.pname,
      quantity:this.productForm.value.Qty,
      price :this.productForm.value.price,
      img1:this.base64code1,
      img2:this.base64code2,
      img3: this.base64code3,
    }];
    // pdata =[pdata]
    
     this.myservice.submitData("addProducts",pdata).subscribe((data) => {
        // this.persondata = Array.from(Object.keys(data), k=>data[k]);
        console.log(data);
        this.productForm.reset();
        this.route.navigate(['/admin/viewproducts']); // navigate to other page
  
     });
  }
  onChange($event: Event,imageNumber:any){
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    
    this.convertToBase64(file,imageNumber)
  }
  convertToBase64(file: File,imageNumber:any) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
  
      this.myimage = d
      if(imageNumber==1){
        this.base64code1 = d
      }
      else if (imageNumber==2){
        this.base64code2 = d
      }
      else if (imageNumber==3){
        this.base64code3 = d
      }
      
     
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  get priceings(): any {
   
    return this.productForm.get('priceing');
    // return this.productForm.get("priceing") as FormArray;
  }
  createFormGroup() {
    return this.fb.group({
      platform: [''],
      price: [''],
      link: ['']
    });
  }
  addPricing() {
    
    this.priceings.push(this.createFormGroup())
    //console.warn(this.productForm.getRawValue())
  }
  
  get PinPriceings(): any {
   
    return this.productForm.get('pincodePricing');
    
  }
  createPriceFormGroup() {
    return this.fb.group({
      pinCode: [''],
      price: [''],
    });
  }
  addPinPricing() {
    this.PinPriceings.push(this.createPriceFormGroup())
   
  }
}
