import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestTokenMiddleware } from './request-token.middleware';
import { ResponseCodeMiddleware } from './response-code.middleware';

export const RequestInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: RequestTokenMiddleware, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ResponseCodeMiddleware, multi: true}
];
