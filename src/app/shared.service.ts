import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public baseUrl = 'https://jsonplaceholder.typicode.com/';
// public baseUrl ="https://webknight.co.in/"

  constructor(public http:HttpClient) { }
  // ----------- get api ---------------- //
  getApi(endPoint:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        }),
      };
    }
    return this.http.get(this.baseUrl + endPoint, httpHeaders);
  }

}
// ----------- get api ---------------- //

