import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.scss']
})
export class RegisterTaskComponent implements OnInit {

  registerTaskForm!:FormGroup
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  this.registerTaskForm= new FormGroup({
    company_id:new FormControl('',[Validators.required]),
    user_id:new FormControl('',[Validators.required]),
    role_id:new FormControl('',[Validators.required]),
    project_id:new FormControl('',[Validators.required]),
    service_id:new FormControl('',[Validators.required]),
    branch_id:new FormControl('',[Validators.required]),
    work_date:new FormControl('',[Validators.required]),
    total_time:new FormControl('',[Validators.required]),
    work_hour:new FormControl('',[Validators.required]),
    comments:new FormControl('',[Validators.required]),
    break_time:new FormControl('',[Validators.required])
  })
  }
  registerTask(){
    let urlReqData={
      company_id:this.registerTaskForm.value.company_id,
      user_id:this.registerTaskForm.value.user_id,
      role_id:this.registerTaskForm.value.role_id,
      project_id:this.registerTaskForm.value.project_id,
      service_id:this.registerTaskForm.value.service_id,
      branch_id:this.registerTaskForm.value.branch_id,
      work_date:this.registerTaskForm.value.work_date,
      totol_time:this.registerTaskForm.value.totol_time,
      work_hour:this.registerTaskForm.value.work_hour,
      comments:this.registerTaskForm.value.comments,
      break_time:this.registerTaskForm.value.break_time,

    }
    console.log(urlReqData);
    
    let url='https://onjyb.dss.gos.mybluehostin.me/api/WorkSheet_Controller/addEmpWorkSheet_1/'
   this.http.post(url,urlReqData).subscribe(res =>{
    console.log(res);
    
   })
  }
  
}
