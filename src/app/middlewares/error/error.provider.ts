import { ErrorHandler } from '@angular/core';
import { ErrorHandlerMiddleware } from './error-handler.middleware';

export const ErrorHandlerProviders = [
    { provide: ErrorHandler, useClass: ErrorHandlerMiddleware},
];
