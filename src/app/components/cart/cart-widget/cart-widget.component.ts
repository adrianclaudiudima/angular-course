import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cart-widget',
  templateUrl: 'cart-widget.component.html',
  styleUrls: ['cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {

  favoriteCounter$: Observable<string>;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.favoriteCounter$ = this.cartService.productsInCart$.pipe(
      map(products => {
        let count = 0;
        products.forEach(p => count = count + p.quantity);
        return `${count}`;
      }));
  }


}
