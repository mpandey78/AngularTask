import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 singupForm!:FormGroup
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      'email':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required])
    })
  }
  user:any={}
 OnSubmit(){
  // console.log("Singup",this.singupForm.value);
  this.user = Object.assign(this.user,this.singupForm.value)
  this.addUser(this.user)

  this.router.navigateByUrl('/home')
 
 }
 addUser(user){
  let users =[]
  if(localStorage.getItem('User')){
    users =JSON.parse(localStorage.getItem('User'))
    users=[user, ...users]

  }
  else{
    users=[user];
  }
  localStorage.setItem('User',JSON.stringify(users))
 }

}
