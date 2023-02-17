import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
   let auth_token = "YTdoekJnaWFyRTBBWTJsMHIwWUZOUk1BRkRwNTNYdjRFcUpNVEdoag=="
// let auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NTc2MTkwNSwiZXhwIjoxNjc1Nzc5OTA1fQ.X0qyxO45KbcCzFPrTve0VhrU3f7GJIfYFyvvXyiiQAk"
// let auth_token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcwIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NTkyMTM2NiwiZXhwIjoxNjc1OTM5MzY2fQ.ayIHKhTsufoZAFcdcp_VyLRLxLpbcS15zUe9dzcrZXc"
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
//  public baseUrl = "https://ats.hiromation.com:5126/"
public baseUrl = "https://api.countrystatecity.in/v1/"
  constructor(private http:HttpClient) {
    
   }


   getApi(endPoint:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          'method': 'GET',
          'headers': 'headers',
          'redirect': 'follow'

        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({

          'X-CSCAPI-KEY': `${auth_token}`
          
        }),
      };
    }
    return this.http.get(this.baseUrl + endPoint, httpHeaders);
  }



  }