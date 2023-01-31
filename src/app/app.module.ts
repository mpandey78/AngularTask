import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { WorksheetTaskComponent } from './worksheet-task/worksheet-task.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    FooterComponent,
    ObservableComponent,
    LoginComponent,
    SignupComponent,
    RegisterTaskComponent,
    WorksheetTaskComponent,
    WorksheetComponent,
    UserListComponent,
    AddUserComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
