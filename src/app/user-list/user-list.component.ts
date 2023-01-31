import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { SharedService } from '../shared.service';
declare var $:any
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  registerTaskForm!:FormGroup;
  editUserForm!:FormGroup
  userList:any=[]
  itemPerPage = 5;
  currentPage = 1;
  totalItems: any;
  
  getData:any=[]
  u_id:any
  constructor(private http:HttpClient,private router:Router,private service:SharedService) { }

  ngOnInit(): void {
    this.getUserList()
    this.registerTaskForm= new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}')]),
      gender:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required]),

      
    }),
    this.editUserForm= new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,]),
      gender:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required]),

      
    })

    }
    registerTask(){
      let urlReqData={
        name:this.registerTaskForm.value.name,
        email:this.registerTaskForm.value.email,
        gender:this.registerTaskForm.value.gender,
        status:this.registerTaskForm.value.status,
      }
      console.log(urlReqData);
      // https://gorest.co.in/public/v2/users
     this.service.postApi('users',urlReqData,1).subscribe(res =>{
     if([res==200]){

       this.router.navigate(['/user-list'])
      this.getUserList()
     }
     else{

     }
      
     })
    }
    getUserList(){
      this.service.getApi('users',1).subscribe(res=>{
        this.userList=res
        this.totalItems=this.userList.length
        console.log(this.totalItems);
        
        console.log(this.userList);
        
      })
    }
    pagination(event: any) {
      console.log(event)
      this.currentPage = event;
      this.getUserList()
    }
    editUser(_id:any){
      // alert(_id)
      this.u_id=_id
      this.service.getApi('users/'+_id,1).subscribe(res=>{
        this.getData=res
        console.log(this.getData);
        
        this.editUserForm.patchValue({
          id:this.getData.id,
          name:this.getData.name,
          email:this.getData.email,
          gender:this.getData.gender,
          status:this.getData.status
        })
        
      })
      // this._id = _id;
        // this._id=_id
        // $("#exampleModal").modal("show");
      
      }
    editUserByid(){

      var apiReqData={
        name:this.editUserForm.value.name,
        email:this.editUserForm.value.email,
        gender:this.editUserForm.value.gender,
        status:this.editUserForm.value.status
      }
      this.service.putApi('users/'+this.u_id,apiReqData,1).subscribe(res=>{
        if(res) {
        
          this.getUserList()
          // this.router.navigate(['/user-list'])
    window.location.href = '/user-list'

        $("#exampleModal").modal("hide");
        }
      })
    }
}
