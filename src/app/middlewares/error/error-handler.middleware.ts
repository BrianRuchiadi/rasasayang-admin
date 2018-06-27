import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { NotificationService } from './../../services/utilities/notification.service';
import { Notification } from './../../classes/notification';

const API_URL = environment.apiUrl;

@Injectable()
export class ErrorHandlerMiddleware implements ErrorHandler {

    constructor(
        private notificationService: NotificationService
    ) {}

    handleError(error: Error | HttpErrorResponse) {

        // check if it is error from server
        if (error instanceof HttpErrorResponse) {
            console.log(['a SERVER error detected in error-handler middleware', error]);
            // handle Http Errors
            if (navigator.onLine) {
            } else {
            // handle offline error
            }
        } else {
            // handle client error / angular related error
            console.log(['a CLIENT error detected in error-handler middleware', error]);
            this.notificationService.add(new Notification('error', 'client side : ' + error));
        }
    }
}
