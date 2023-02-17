import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/provider/common-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
 zoneList:any=[]
 itemPerPage = 5;
 currentPage = 1;
 totalItems: any;
  constructor(private route:Router, private service:CommonServiceService,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.getListData()
    this.getCountryList()
  }

getListData(){
  const headers = new HttpHeaders({ 'Authorization':'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM',"Content-Type": "application/json","moduleId" : '132' })
  this.http.get('https://ats.hiromation.com:5126/zone/list?page_limit=10&page_order=desc&page_page=1&page_search=&page_sort=id&page_entryType=&module_id=132',{headers}).subscribe(res=>{
   this.zoneList=res['data']['content']
  this.totalItems=this.zoneList.length
   console.log(this.zoneList);
   
    
  })
}
pagination(event: any) {
  console.log(event)
  this.currentPage = event;
  this.getListData()
}
getCountryList(){
  this.service.getApi("country/getSelectionList",1).subscribe(res=>{
 console.log(res);
 
  })
}
viewZone(id:any){
this.route.navigate(['/view-zone'])
}

}
