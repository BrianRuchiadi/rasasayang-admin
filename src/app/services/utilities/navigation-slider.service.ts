import { Injectable } from '@angular/core';

import { catchError, map, tap } from 'rxjs/operators';
import { Notification } from './../../classes/notification';
import { Subject } from 'rxjs';

@Injectable()
export class NavigationSliderService {
    public observableSlideSubject = new Subject<Boolean>();
    public slideState = true;
    public slideStateObservable = this.observableSlideSubject.asObservable();

    public changeSlideState(): void {
        this.slideState = !this.slideState;

        this.observableSlideSubject.next(this.slideState);
    }
}
