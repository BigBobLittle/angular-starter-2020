import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  /**
   *
   * @param request
   * @param next
   * depending on your use case, you can check if token exist,
   * or its expired using Oauth angular jwt
   *
   */

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // retrive your secret token from storage
    const token = localStorage.getItem('your-token-name');

    // in most cases, /auth routes may not need authorization headers
    if (request.url.includes('/auth')) {
      return next.handle(request);
    }
    const updateRequest = request.clone({
      setHeaders: {
        authorization: `${token}`,
      },
    });

    return next.handle(request);
  }
}
