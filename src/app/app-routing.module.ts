import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { HeaderComponent } from './shared/header/header.component';
import { WorksheetTaskComponent } from './worksheet-task/worksheet-task.component';
import { WorksheetComponent } from './worksheet/worksheet.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:WorksheetTaskComponent},
  {path:'promise',component:PromiseComponent},
  {path:'observable',component:ObservableComponent},  
  {path:'signup',component:SignupComponent},
  {path:'register-task',component:RegisterTaskComponent},
  {path:'worksheet',component:WorksheetComponent},
  {path:'**',redirectTo:'home'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
