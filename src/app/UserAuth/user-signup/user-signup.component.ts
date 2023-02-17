import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/provider/common-service.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  userSignupForm!:FormGroup;
  countryList:any=[]
  stateList:any = []
  cityList:any=[];
  constructor( private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.getCountry()
  }
  getCountry(){
    this.commonService.getApi('countries',1).subscribe(res=>{
      this.countryList=res
      
    })
  }
  IsoContryCode:any
  getStateList(iso:any){
    this.IsoContryCode=iso.target.value
    // countries/IN/states/MH/cities

    this.commonService.getApi(`countries/${this.IsoContryCode}/states`,1).subscribe(res=>{
      this.stateList=res
      
    })
  }
  IsoCity:any
  getCityList(st:any){
    this.IsoCity = st.target.value
    console.log(this.IsoCity);
    
    this.commonService.getApi(`countries/${this.IsoContryCode}/states/${this.IsoCity}/cities`,1).subscribe(res=>{
      this.cityList = res
      
    })
  }

}
