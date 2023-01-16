import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  newMemberName=''
  members:string[]=[]
  count:any=[]
  value ="mahadev"
  textStyle={
    'color':'green',
    'text-align':'center',
    'font-size':'20px'
  }
  studentData:any =[]
  constructor(private http:HttpClient) { }
 
  ngOnInit(): void {
    this.student()
  }
  addName(){
  this.members.push(this.newMemberName)
  this.newMemberName =''
  console.log(this.members);
  this.count=this.members.length
  console.log(this.count);
  
  
}
OnInput(member:any){
this.newMemberName =member
console.log(this.newMemberName);

}
student(){
  this.http.get('http://localhost:3000/').subscribe(res =>{
  this.studentData=res
  console.log(this.studentData);
  console.log(res);
  
  
  })
}
}
