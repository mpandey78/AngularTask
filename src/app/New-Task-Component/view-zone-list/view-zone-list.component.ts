import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators,FormControl} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-view-zone-list',
  templateUrl: './view-zone-list.component.html',
  styleUrls: ['./view-zone-list.component.scss']
})
export class ViewZoneListComponent implements OnInit {
  registerTaskForm!:FormGroup
  getData:any=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.editUser("_id")
    this.registerTaskForm= new FormGroup({
      zone:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      desciption:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required])
      
    })
  }
  // https://ats.hiromation.com:5126/zone/getById/{id}/132  
  editUser(_id:any){
    // alert(_id)
    // this.u_id=_id;
  const headers = new HttpHeaders({ 'Authorization':'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM',"Content-Type": "application/json","moduleId" : '132' })

    this.http.get('https://ats.hiromation.com:5126/zone/getById/%7Bid%7D/132',{headers}).subscribe(res=>{
      this.getData=res
      console.log(this.getData);
      
      this.registerTaskForm.patchValue({
        id:this.getData.id,
        name:this.getData.name,
        email:this.getData.email,
        gender:this.getData.gender,
        status:this.getData.status
      })
      
    })
    // this._id = _id;
      // this._id=_id
      
    }

}
