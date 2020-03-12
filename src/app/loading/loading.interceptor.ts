import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store';
import {DecrementLoadingAction, IncrementLoadingAction} from './store/loading.actions';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private store: Store<ApplicationState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(new IncrementLoadingAction());
    return next.handle(req).pipe(
      tap(v => console.log('intercepted !!')),
      finalize(() => {
        this.store.dispatch(new DecrementLoadingAction());
      })
    );
  }

}
