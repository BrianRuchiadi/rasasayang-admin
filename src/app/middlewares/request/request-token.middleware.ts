import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class RequestTokenMiddleware implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     // only if the request is fired to own API
     if (req.url.includes(API_URL)) {
      const requestPath = req.url.replace(API_URL, '');

      switch (requestPath) {
      case '/login':
      case '/register':
          break;
      default:
          const accessToken = localStorage.getItem('accessToken');
          const setAuthorizationHeader = {
          setHeaders: {
              Authorization: `Bearer ${accessToken}`
          }
          };

          req = req.clone(setAuthorizationHeader);
      }
    }

    return next.handle(req);
  }
}
