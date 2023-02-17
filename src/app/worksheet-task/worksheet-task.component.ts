import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../provider/common-service.service';

@Component({
  selector: 'app-worksheet-task',
  templateUrl: './worksheet-task.component.html',
  styleUrls: ['./worksheet-task.component.scss']
})
export class WorksheetTaskComponent implements OnInit {

  constructor(private http:CommonServiceService) { }

  ngOnInit(): void {
  this.getDataList()
  }

  getDataList(){
    this.http.getApi('country/getSelectionList',1).subscribe(res=>{
      console.log(res);
      
    })
  }
}
