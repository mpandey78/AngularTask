import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { WorksheetTaskComponent } from './worksheet-task/worksheet-task.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import {ToastrModule}  from 'ngx-toastr';
import { AddUserListComponent } from './New-Task-Component/add-user-list/add-user-list.component';
import { UserListsComponent } from './New-Task-Component/user-lists/user-lists.component';
import { ViewZoneListComponent } from './New-Task-Component/view-zone-list/view-zone-list.component';
import { FilterPipe } from './filter.pipe';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { UserSignupComponent } from './UserAuth/user-signup/user-signup.component';
import { UserLoginComponent } from './UserAuth/user-login/user-login.component';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';
import { AuthGuard } from './authGuard/auth.guard';
import { TemperatureComponent } from './practice/temperature/temperature.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartjsComponent } from './practice/chartjs/chartjs.component';
// import { NgSelectModule } from "@ng-select/ng-select";



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
    AddUserComponent,
    AddUserListComponent,
    UserListsComponent,
    ViewZoneListComponent,
    FilterPipe,
    UserSignupComponent,
    UserLoginComponent,
    TemperatureComponent,
    ChartjsComponent    
    ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      maxOpened: 1,
      preventDuplicates: true,
    }),
    SocialLoginModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    // NgSelectModule
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // '1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com' //stack
              // '50058279728-v41t0ssdg5potbruufdmh1svalg9o3oq.apps.googleusercontent.com' //old
              '683195763952-m83jicm4l9vamgdvtq3spu9mi4n2557t.apps.googleusercontent.com' //new manish
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('282577308941815')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    [AuthGuard]
    // {provide:HTTP_INTERCEPTORS,useClass:HttpErrorInterceptor}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
