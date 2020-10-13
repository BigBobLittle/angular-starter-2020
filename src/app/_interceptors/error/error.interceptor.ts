import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  // let use this interceptor to retry request, catch errors
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(2), // retry all failed http request again for 2 times
      catchError((error: HttpErrorResponse) => {
        let customErrorMessage = '';

        // lets handle client side errors
        if (error.error instanceof ErrorEvent) {
          customErrorMessage = `Error: ${error.error.message}`;
        } else {
          // its shd be a server side error
          customErrorMessage = `Error status: customize your server side error here`;
        }

        console.log(customErrorMessage);
        return throwError(customErrorMessage);
      })
    );
  }
}
