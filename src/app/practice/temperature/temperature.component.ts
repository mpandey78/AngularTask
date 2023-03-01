import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})

export class TemperatureComponent implements OnInit {
  
  @Input() weatherData: data[];

  c=""
  f=""
  fah: number=32;
  cel:number=0;
  temperatureForm!:FormGroup
  hide:boolean=true
  
  constructor() { }
  city: any;
  cityDetails: any;
  showNoResult: boolean = false;
  hideDetails: boolean = false;
  ngOnInit(): void {

    this.temperatureForm = new FormGroup({
      tempc:new FormControl('',[Validators.required]),
      tempf:new FormControl('',[Validators.required])
    })
  }
  // sendTempValue(event:string, type:'c' | 'f'){
  //  if(event === null){
  //   this.c ="";
  //   this.f ="";
  //   return;
  //  }
  //  const temperatureDada = Number(event);
  //  if(type === 'c'){
  //   this.f = ((temperatureDada * 9) / 5 + 32 ).toFixed(1);
  //  }
  //  else
  
  //  {
  //   this.c = (((temperatureDada-32)*5 )/9).toFixed(1);
  //  }
  // }
  


  getChangeCel(event){
   
    const newC = ((Number(this.fah) - 32) * (5 / 9));
    this.cel=newC;
}
  getChangeFah(event){
  const newF =(Number(this.cel) * (9 / 5) + 32);

    this.fah=newF;

}
NumOnly(event: any) {
  let Numpattern = /^([0-9])*$/;
  let resultNum = Numpattern.test(event.key);
  return resultNum;

}


cityChange(value: any) {
  if (value) {
    let foundCityDetails = this.weatherData.find(city => city.name.toLowerCase() == value.toLowerCase());
    if (foundCityDetails) {
      this.cityDetails = foundCityDetails;
      this.hideDetails = true;
      this.showNoResult = false;
    }
    else {
      this.showNoResult = true;
      this.hideDetails = false;
    }
  } else {
    this.showNoResult = false;
    this.hideDetails = false;
  }

}






}
interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}