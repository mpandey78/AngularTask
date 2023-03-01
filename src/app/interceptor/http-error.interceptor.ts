import {HttpInterceptor,HttpErrorResponse,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { AuthServiceService } from '../provider/auth-service.service';
import {catchError}  from 'rxjs/operators'


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

    constructor(private authService:AuthServiceService){}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
        //   this.authService.hideSpinner();
          var errorThrow = {
            responseCode: error.error.code || error.error.statusCode || error.error.responseCode,
            responseMessage: error.error.message || error.error.statusMessage || error.error.responseMessage
          }
          if (error.error instanceof ErrorEvent) {
            console.log(error);
          } else {
            console.log('This is server side error')
            switch (error.error.responseCode) {
              case 400:
                console.log('Error 400.')
                this.authService.errorToast(error.error.responseMessage);
                break;
              case 401:
                // this.authService.errorToast('Unauthorized Access.');
                this.authService.errorToast(error.error.responseMessage);
                // this.authService.logout()
                break;
              case 403:
                console.log("Error 403")
                // this.authService.errorToast('Unauthorized Access.');
                this.authService.errorToast(error.error.responseMessage);
                // this.authService.logout()
                break;
              case 500:
                this.authService.errorToast('Internal Server Error.');
                break;
              default:
                // this.authService.errorToast(error.error.responseMessage);
                break;
            }
          }
          return throwError(errorThrow)
        }))
      }
    
}