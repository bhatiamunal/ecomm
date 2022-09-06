import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';
import{ CallingAPIService} from './../../../Angular_API/calling-api.service'
@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {
  myOrder:any
  tempData:any;
  tempData1:any;
  tempData2:any;
  myProfile:any;
  LoginStatus:any;
  constructor(private myservice: CallingAPIService,private route:Router,private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginStatus =  localStorage.getItem('adminLoginData');
    if(this.LoginStatus!=0){
      this.route.navigate(['/admin/login']);
    }
    this.viewMyorder()
  }
  filterData(Array:any,ele:any){
    let dataToBeRetrun = null 
    Array.forEach((element:any) => {
      if(element.id==ele){
        dataToBeRetrun = element
      }
    });
    return dataToBeRetrun
  }
  viewMyorder(){
    this.myservice.getData("products").subscribe((productData3)=>{
      this.tempData2 =productData3;
      this.myservice.getData("viewOrder").subscribe((data1)=>{
        this.myservice.getData("user").subscribe((data2)=>{
            this.tempData =data1
            this.tempData1 = data2
            this.tempData=this.tempData.map((ele:any)=>{
              ele = ele;
              let pid=ele.userid
              let oid =ele.orderId
              ele.userid = this.filterData(this.tempData1, pid  )
              ele.orderId = this.filterData(this.tempData2, oid  )
              return ele;
            })
        });
      })
    });
  }
}
