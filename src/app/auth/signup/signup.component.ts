import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthServiceService } from 'src/app/provider/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 registerTaskForm!:FormGroup
  constructor(private http:HttpClient,private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.getUserList()
    this.registerTaskForm= new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      mobileNumber:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      dateOfBirth:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required]),

      
    })
    }
    registerTask(){
      let urlReqData={
        firstName:this.registerTaskForm.value.firstName,
        lastName:this.registerTaskForm.value.lastName,
        email:this.registerTaskForm.value.email,
        mobileNumber:this.registerTaskForm.value.mobileNumber,
        address:this.registerTaskForm.value.address,
        dateOfBirth:this.registerTaskForm.value.dateOfBirth,
        password:this.registerTaskForm.value.password,
        confirmPassword:this.registerTaskForm.value.confirmPassword,
        
        
  
      }
      console.log(urlReqData);
      // https://gorest.co.in/public/v2/users
     this.authService.postApi('signUp',urlReqData,0).subscribe(res =>{
      console.log(res);
      alert(res)
      
     })
    }
    getUserList(){
      this.http.get('https://gorest.co.in/public/v2/users').subscribe(res=>{
        console.log(res);
        
      })
    }

}
