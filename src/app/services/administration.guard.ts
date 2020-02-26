import {CanLoad, Route, UrlSegment} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()
export class AdministrationGuard implements CanLoad {
  constructor(private authService: AuthService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      tap(v => console.log(v))
    );
  }

}
