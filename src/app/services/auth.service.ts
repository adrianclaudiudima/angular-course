import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable()
export class AuthService {

  public isLoggedInSubject: Subject<boolean> = new ReplaySubject(1);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() {
    this.isLoggedInSubject.next(true);
  }

  setAuthState(isLoggedIn: boolean) {
    this.isLoggedInSubject.next(isLoggedIn);
  }

}
