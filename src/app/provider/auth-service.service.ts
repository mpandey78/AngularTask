import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
// import {NgxSpinnerService} from 'ngx-spinner';
// import {ToastrService} from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseURL='http://localhost:27017/user/'
  constructor(public httpClient:HttpClient,private toastr:ToastrService ) { }
  
  getApi(endPointURL:any,isHeader:any) : Observable<any>
  {
    var httpHeaders;
    if(isHeader == 0){
      httpHeaders = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    }
    else{
      httpHeaders={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          token:`${localStorage.getItem("token")}`
        })
      }
    }
    return this.httpClient.get(this.baseURL + endPointURL , httpHeaders)
  }
  postApi(endPointURL:any,data:any,isHeader:any) : Observable<any>{
   var httpHeaders;
   if(isHeader==0){
    httpHeaders={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   }
   else{
    httpHeaders= {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        token:`${localStorage.getItem("token")}`
      })
    }
   }
    return this.httpClient.post(this.baseURL + endPointURL , data , httpHeaders)
  }

  putApi(endPointURL:any,data:any,isHeader:any) : Observable<any>{
    var httpHeaders;
    if(isHeader==0){
      httpHeaders = {
        headers:new HttpHeaders({

        })
      }
    }else{
      httpHeaders={
        headers:new HttpHeaders({
          token:`${localStorage.getItem("token")}`
        })
      }
    }

    return this.httpClient.put(this.baseURL + endPointURL,data,httpHeaders)
  }

  // toastr service
  successToast(msg:string) {
    this.toastr.success(msg);
  }
  errorToast(msg:string) {
    this.toastr.error("erro");
  }
  infoToast(msg:string) {
    this.toastr.info(msg);
  }
  warningToast(msg:string) {
    this.toastr.warning(msg);
  }
}
