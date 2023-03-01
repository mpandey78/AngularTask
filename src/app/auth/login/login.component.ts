import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { AuthServiceService } from 'src/app/provider/auth-service.service';
import {
  SocialAuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  visible: boolean = false;
  changetype: boolean = true;
  user:SocialUser
  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private socialAuth:SocialAuthService, private router:Router,private http:HttpClient,private authService:AuthServiceService) { }

  ngOnInit(): void {
    
    
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}')]),
      'password':new FormControl('',[Validators.required])
    })
  }

 loginWithGoggle(){
  this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
  this.socialAuth.authState.subscribe((user)=>{
    console.log(user);
    
    this.user=user
    console.log(this.user);
    
  })
 }
  OnSubmit(){
    // this.router.navigate(['/worksheet'])

  //   const user =this.userAuth(this.loginForm.value)
  //   if(user){
  //     alert('Login successfully')
  //     this.router.navigateByUrl('promise')
  //   }
  //   else{
  //     alert('Incorrect login credintial')
  //   }
  // }
  // userAuth(user:any){
  //   let userArray =[]
  //   if(localStorage.getItem('User')){
  //     userArray=JSON.parse(localStorage.getItem('User'))
  //     return userArray.find(p=>p.email === user.email && p.password === user.password)
  //   }
  let dataApi = {
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
  }
  console.log(dataApi);
  this.authService.postApi('login',dataApi,0).subscribe(res=>{
   if(res['reponseCode']==200){
    this.authService.successToast(res['responseMessage'])
    // localStorage.setItem('token', res['result']['token'])
    this.router.navigate(['/user-list'],{skipLocationChange:true})
   } else {
    this.authService.errorToast(res['responseMessage'])

  }

  },err=>{
    
  this.authService.errorToast(err['responseMessage'])
    
  })
  // let url='https://onjyb.dss.gos.mybluehostin.me/api/User_Controller/login'
  // this.http.post(`${url}?txtEmail=jignesh@etechmavens.com+txtPassword=a`,dataApi).subscribe(res=>{
  //   this.router.navigate( ['/worksheet'], {queryParams: { txtEmail:"jignesh@etechmavens.com",txtPassword:"a"
  // }});    
  // })

  }

  logOut(){
    this.socialAuth.signOut()
  }

}
