import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import  *  as CryptoJS from  'crypto-js';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CallingAPIService {

  private finaldata = [];
  public productData:any;
  loginStatusAdmin:any;
  private apiurl = "http://localhost:9191/";
   constructor(private http: HttpClient,private route:Router) { }
   productId :any;
   allProducts:any;
   loginStatus:boolean=false;
   key:any
   getData( data:any) {
    return this.http.get(this.apiurl+data);
    }
    
   deleteData( baseUrl:any,id:any): Observable<any>  {
    return  this.http.delete(`${baseUrl}/${id}`,{responseType: 'json'})
  }
    submitData(data:any,dataToSave:any) {
      return this.http.post(this.apiurl+data,dataToSave);
    }
    public setKeyValue(key: string, value: any) {
      
      localStorage.setItem(key, value);
    }
    public loginCheck(){
      let logincheck =localStorage.getItem('userName')
      if(logincheck){
        this.loginStatus = true
      }
    }
    public logout(){
      this.loginStatus = false
      localStorage.removeItem('userName')
      localStorage.removeItem('profile')
      this.route.navigate(['/']);
    }
    adminLogin(data:any){
      if(data.userEmail=='admin' &&  data.password=='admin' ){
        localStorage.setItem('adminLoginData','0')
      }
    }
    
    adminLogout(){
      localStorage.removeItem('adminLogin')
    }
}
