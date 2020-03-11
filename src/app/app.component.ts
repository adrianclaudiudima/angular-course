import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {fromEvent, Observable} from 'rxjs';
import {filter, map, take, tap} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-training';

  authState: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService, private breakpointObserver: BreakpointObserver) {
    this.authState = this.authService.isLoggedIn$;
  }

  updateAuthState(state: boolean) {
    this.authService.setAuthState(state);

  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
      filter(bp => bp.matches)
    ).subscribe(
      v => {
        console.log('small');
      }
    );
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).pipe(
      filter(bp => bp.matches)
    ).subscribe(
      v => {
        console.log('LARGE');
      }
    )


    /*
        const obs = new Observable(subscriber => {
          setTimeout(() => {
            subscriber.next('VALUE 1');
            subscriber.next('VALUE 2');
            subscriber.next('VALUE 3');
            subscriber.complete();
          }, 3000);
        });
    */
    /*
        const obsSubscription: Subscription = obs.subscribe(value => {
          console.log(value);
        }, noop, () => {
          console.log('COMPLETE !!');
        });
    */
    /*

        let i = 0;
        i = 1;

        fromEvent(document, 'click').pipe(
          tap(v => {
            console.log('clicked');
            console.log(v);
            i++;
          }),
          map(v => i),
          take(4),
        ).subscribe(value => {
          console.log(value);
          console.log('on next');
        }, error => {
          console.log('error');
        }, () => {
          console.log('complete');
        })
    */


    /*    interval(1000)
          .pipe(
            take(15),
            filter(value => value % 2 === 0),
            tap(v => {
              if (v === 4) {
                throw 'Something went wrong';
              }
            }),
            catchError(err => {
              return of(200);
            }),
            map(value => value * 2),
            tap(value => console.log('value from tap', value))
          ).subscribe(() => {
            console.log('on next');
          }, error => {
            console.log('error ! ');
          },
          () => {
            console.log('on complete ! ');
          }
        )*/
    ;

  }


}
