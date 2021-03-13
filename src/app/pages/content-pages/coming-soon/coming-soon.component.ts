import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit, OnDestroy {

  pickDate = new Date().setMonth(new Date().getMonth() + 10);
    datePipe = new DatePipe('en-US');
    launchDate = this.datePipe.transform(this.pickDate, 'yyyy-MM-dd');

    countdown: any;

    private _unsubscribeAll: Subject<any>;

    constructor(private cdr: ChangeDetectorRef) {
        // Set the defaults
        this.countdown = {
            weeks: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {
        const currDate = moment();
        const launchDate = moment(this.launchDate);
        let diff = launchDate.diff(currDate, 'seconds');
        this.countdown = this.calculateRemainingTime(diff);

        // Create a subscribable interval
        const countDown = interval(1000)
            .pipe(
                map(value => {
                    return diff = diff - 1;
                }),
                map(value => {
                    return this.calculateRemainingTime(value);
                })
            );

        // Subscribe to the countdown interval
        countDown
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
                this.countdown = value;
                this.cdr.detectChanges();
            });

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    private calculateRemainingTime(seconds): any {
        const timeLeft = moment.duration(seconds, 'seconds');

        return {
            weeks: timeLeft.asWeeks().toFixed(0),
            days: timeLeft.asDays().toFixed(0),
            hours: timeLeft.hours(),
            minutes: timeLeft.minutes(),
            seconds: timeLeft.seconds()
        };
    }
}
