import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-training';

  authState: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {
    this.authState = this.authService.isLoggedIn$;
  }

  updateAuthState(state: boolean) {
    this.authService.setAuthState(state);
  }


}
