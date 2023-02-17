import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { SharedService } from '../provider/shared.service';
// import { resolve } from 'dns';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  
  laptopData: any
  totalData: any = []
  startTime: any = []
  hrStart: any = []
  hrEnd: any = []
  totalHr: any
  start: any
  date: any = []
  diff: number;
  end: any
  unique: any = []
  finalData: any = []
  uniqueEmployess: any = []
  diffTime: any
  fixedtime: any
  allData:string[]=[]
  newData=''
  constructor(public sharedService: SharedService, private http: HttpClient) { }
  dell = {
    brand: 'dell',
    hardDisc: '1TB',
    color: 'Black'
  }
  hp = {
    brand: 'HP 4205',
    hardDisc: '2TB',
    color: 'silver'
  }
  notAvail = {
    brand: 'not avail',
    hardDisc: 'not avail',
    color: 'not avail'
  }
  Hpavailble() {
    return true
  }
  Dellavailble() {
    return false
  }

  ngOnInit(): void {


    this.getData()
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved')
      // reject('Promise is rejected')
      if (this.Hpavailble()) {
        return setTimeout(() => {
          resolve(this.hp)
        }, 3000);
      } else if (this.Dellavailble()) {
        return setTimeout(() => {
          resolve(this.dell)
        }, 3000);
      } else {
        return setTimeout(() => {
          reject(this.notAvail)
        }, 3000);
      }
    });
    buyLaptop.then(res => {
      console.log('then code=>', res);

      this.laptopData = JSON.stringify(res)

    }).catch(res => {
      console.log('catch code =>', res);
      this.laptopData = res
    })
  }


sendData(){

this.allData.push(this.newData)
this.newData=''
console.log(this.allData);

  
  
}
onInput(data){
this.newData=data
}



  getData() {
    this.http.get('https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==').subscribe(res => {
      this.totalData = res
      //  console.log(this.totalData.filter(n=>n !=null));
      const key = 'EmployeeName'
      this.unique = [...new Map(this.totalData.map(item => [item[key], item])).values()];
      this.uniqueEmployess = this.unique.filter((e: any) => e.EmployeeName != null);
      this.finalData = this.uniqueEmployess.sort((a, b) => (a.totalHrs < b.totalHrs) ? 1 : -1 );
      console.log("final data", this.finalData);


      this.totalData.forEach((ele) => {
        if (
          new Date(ele.EndTimeUtc).getTime() > new Date(ele.StarTimeUtc).getTime()
        ) {
          ele.timeDiff =
            new Date(ele.EndTimeUtc).getTime() -
            new Date(ele.StarTimeUtc).getTime();
        } else {
          ele.timeDiff = 0;
        }
      });
      this.uniqueEmployess.forEach((elem) => {
        elem.totalHrs = new Date(
          this.totalData.reduce((acc, val) => {
            if (val.EmployeeName == elem.EmployeeName) return acc + val.timeDiff;
            return acc;
          }, 0)
        ).getHours();
      });
      console.log('uniqueEmployess---->', this.totalData);

      console.log('this.uniqueEmployee---->', this.uniqueEmployess);

 
      //  this.hrStart =new Date( this.totalData[2].StarTimeUtc)
      //  this.hrEnd =new Date (this.totalData[2].EndTimeUtc)
      //  this.diffTime = Math.abs(this.hrEnd - this.hrStart)/36e5;
      // this.fixedtime =this.diffTime.toFixed(1)
      // console.log(this.fixedtime);






    })
  }




  getPager(
    totalItems: number,
    currentPage: number = 1,
    googlePager: boolean = false,
    pageSize: number = 10
  ) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number;
    let endPage: number;
    let pages: any[] = [];

    // google-like paging
    if (totalPages <= 5 || !googlePager) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // set number of pages
    for (let i = 1; i <= endPage; i++) {
      pages.push(i);
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }



}
