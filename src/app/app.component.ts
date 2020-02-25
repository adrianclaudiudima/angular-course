import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ShopService} from './services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-training';
  id = 1;

  constructor(private router: Router, private shopService: ShopService) {
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToFavorite() {
    this.router.navigate([`/favorite/${this.id}`], {queryParams: {someId: this.id}});
    this.id = this.id + 1;
  }
}
