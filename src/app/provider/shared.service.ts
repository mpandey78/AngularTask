import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

let auth_token = "ba1017f6c901adb5b42969ee70a334e94b4ec3ee870e80f2ad17ce3d67250d3b";
// let auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NTc2MTkwNSwiZXhwIjoxNjc1Nzc5OTA1fQ.X0qyxO45KbcCzFPrTve0VhrU3f7GJIfYFyvvXyiiQAk"
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public baseUrl = 'https://gorest.co.in/public/v2/';
  // public baseUrl = 'https://ats.hiromation.com:5126/zone/'


  constructor(public http:HttpClient,private toastr:ToastrService) { }

  // ----------- get api ---------------- //
  getApi(endPoint:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
          // 'Authorization': `Bearer ${auth_token}`

        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          'Authorization': `Bearer ${auth_token}`
          
        }),
      };
    }
    return this.http.get(this.baseUrl + endPoint, httpHeaders);
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
         'Authorization': `Bearer ${auth_token}`

        //  token:`${localStorage.getItem("token")}`
       })
     }
    }
     return this.http.post(this.baseUrl + endPointURL , data , httpHeaders)
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
          //  token:`${localStorage.getItem("token")}`
          'Authorization': `Bearer ${auth_token}`

         })
       }
     }
 
     return this.http.put(this.baseUrl + endPointURL,data,httpHeaders)
   }
  patchApi(endPointURL:any, data:any, isHeader:any): Observable<any> {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`

        //  token: `${localStorage.getItem("token")}`,
        })
      }
    }
    return this.http.patch(this.baseUrl + endPointURL, data, httpHeaders)
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
// ----------- get api ---------------- //

