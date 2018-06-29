import { Injectable } from '@angular/core';

import { catchError, map, tap, debounceTime } from 'rxjs/operators';
import { Notification } from './../../classes/notification';
import { Subject } from 'rxjs';

@Injectable()
export class NavigationSliderService {
    public observableSlideSubject = new Subject<Boolean>();
    public clicked = false;
    public canClick = true;
    public slideState = true;
    public slideStateObservable = this.observableSlideSubject.asObservable();

    public changeSlideState(): void {
        if (!this.clicked) {
            this.clicked = true;

            this.canClick = false;
            this.slideState = !this.slideState;
            this.observableSlideSubject.next(this.slideState);

            this.waitUntilCanClick();
            return;
        }

        if (this.canClick) {
            this.canClick =  false;
            this.slideState = !this.slideState;
            this.observableSlideSubject.next(this.slideState);

            this.waitUntilCanClick();
        }
    }

    public waitUntilCanClick() {
        setTimeout(() => this.canClick = true, 1000);
    }
}
