import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ResponseCodeMiddleware implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // only if the response is given from own API
        if (req.url.includes(API_URL)) {
            return next.handle(req)
            .pipe(
                tap(
                    (event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            // do stuff with success response
                        }
                    }, (err: any) => {
                        if (err instanceof HttpErrorResponse) {
                            if (err.status === 401) {
                                localStorage.removeItem('accessToken');
                                this.router.navigate(['/login']);
                            }
                        }
                    }
                )
            );
        }
    }
}
