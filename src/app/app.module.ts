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
import { ChartsModule } from 'ng2-charts';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { WorksheetTaskComponent } from './worksheet-task/worksheet-task.component';
import { WorksheetComponent } from './worksheet/worksheet.component';




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
    WorksheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
