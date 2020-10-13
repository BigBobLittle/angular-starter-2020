/**
 * there may be several interceptors in this application
 * the best way is to expose all of them here, and finally
 * expose to app.module.ts for proper code organization
 *
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error/error.interceptor';

// make sure u add all your interceptors below in order to be available in the apps module
import { TokenInterceptor } from './token/token-interceptor';

export const exportThisInterceptorsToAppModule = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
