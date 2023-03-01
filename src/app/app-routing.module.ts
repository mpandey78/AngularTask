import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './authGuard/auth.guard';
import { AddUserListComponent } from './New-Task-Component/add-user-list/add-user-list.component';
import { UserListsComponent } from './New-Task-Component/user-lists/user-lists.component';
import { ViewZoneListComponent } from './New-Task-Component/view-zone-list/view-zone-list.component';
import { ObservableComponent } from './observable/observable.component';
import { ChartjsComponent } from './practice/chartjs/chartjs.component';
import { TemperatureComponent } from './practice/temperature/temperature.component';
import { PromiseComponent } from './promise/promise.component';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSignupComponent } from './UserAuth/user-signup/user-signup.component';
import { WorksheetTaskComponent } from './worksheet-task/worksheet-task.component';
import { WorksheetComponent } from './worksheet/worksheet.component';

const routes: Routes = [
  {path:'',redirectTo:'zone-list',pathMatch:'full'},
  {path:'zone-list',component:UserListsComponent},
  {path:'user-list',component:UserListComponent,canActivate:[AuthGuard]},
  {path:'view-zone',component:ViewZoneListComponent},
  {path:'login',component:LoginComponent},
  // {path:'home',component:WorksheetTaskComponent},
  {path:'promise',component:PromiseComponent},
  {path:'observable',component:ObservableComponent},  
  {path:'signup',component:SignupComponent},
  {path:'register-task',component:RegisterTaskComponent},
  {path:'worksheet',component:WorksheetComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'add-zone-list',component:AddUserListComponent},
  {path:'user-signup',component:UserSignupComponent},
  {path:'temperature',component:TemperatureComponent},
  {path:'echart',component:ChartjsComponent},
  {path:'**',redirectTo:'zone-list'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
