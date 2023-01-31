import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let auth_token = "ba1017f6c901adb5b42969ee70a334e94b4ec3ee870e80f2ad17ce3d67250d3b";
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // public baseUrl = 'https://jsonplaceholder.typicode.com/';
// public baseUrl ="https://webknight.co.in/"
public baseUrl = 'https://gorest.co.in/public/v2/';


  constructor(public http:HttpClient) { }

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

}
// ----------- get api ---------------- //

