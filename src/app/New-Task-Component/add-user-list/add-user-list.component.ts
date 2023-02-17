import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-list',
  templateUrl: './add-user-list.component.html',
  styleUrls: ['./add-user-list.component.scss']
})
export class AddUserListComponent implements OnInit {
  registerTaskForm!:FormGroup
  countryList:any=[]
  stateList:any =[]
  getStateByiso2:any=[]
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.getCountrytList()
    this.registerTaskForm= new FormGroup({
      zone:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      desciption:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required])
      
    })
  }

  getCountrytList(){
    const headers = new HttpHeaders({ 'Authorization':'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM',"Content-Type": "application/json","moduleId" : '132' })

    this.http.get('https://ats.hiromation.com:5126/country/getSelectionList',{headers}).subscribe(res=>{
      this.countryList = res['data']
      
    })
  }
  id:any
  getStateList(event:any){
    this.id=event.target.value
    console.log(this.id);
    
    let apiUrl = `${'https://ats.hiromation.com:5126/state/getSelectionList'}`
    const headers = new HttpHeaders({ 'Authorization':'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM',"Content-Type": "application/json","moduleId" : '132' })

    this.http.get(apiUrl,{headers}).subscribe(res=>{
     this.stateList = res['data']
     this.getStateByiso2=this.stateList
     console.log(this.getStateByiso2);
     
     
    })
  }
  registerZone(){
    this.route.navigate(['/zone-list'])
  let dataUrl=[{
    zone:this.registerTaskForm.value.zone,
    country:this.registerTaskForm.value.country,
    state:this.registerTaskForm.value.state,
    description:this.registerTaskForm.value.desciption,
    status:this.registerTaskForm.value.status
  }]
  let datazoneurl= JSON.stringify(dataUrl)
  const headers = new HttpHeaders({ 'Authorization':'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM',"Content-Type": "application/json","moduleId" : '132' })

  this.http.post('https://ats.hiromation.com:5126/zone/add',datazoneurl,{headers}).subscribe(res=>{
  })

  }
}
