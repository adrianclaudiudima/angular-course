import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {showConfigure} from './product-card.animation';
import {Router} from '@angular/router';
import {interval, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {CartService} from '../../../services/cart.service';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {AddToFavoriteAction, RemoveFromFavoriteAction, UpdateFavoriteAction} from '../../../store/favorite/favorite.actions';
import {isProductAtFavorite} from '../../../store/favorite/favorite.reducer';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss'],
  animations: [showConfigure]
})
export class ProductCardComponent implements OnInit {
  showSuggestion = false;
  isAtFavorite$: Observable<boolean>;
  @Input()
  product: Product;

  constructor(
    private router: Router, private cartService: CartService,
    private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    this.isAtFavorite$ = this.store.pipe(
      select(isProductAtFavorite, this.product.id)
    );
  }


  navigateToProductDetails() {
    interval(300).pipe(take(1)).subscribe(() => {
      this.router.navigate(['/shop/' + this.product.id]);
    });
  }

  addProductToCart() {
    this.cartService.addProductToCart(this.product);
  }

  addProductToFavorite() {
    this.store.dispatch(new AddToFavoriteAction(this.product));
  }

  removeFromFavorite() {
    this.store.dispatch(new RemoveFromFavoriteAction(this.product.id));
  }

  updateProduct() {
    this.store.dispatch(new UpdateFavoriteAction({
      id: this.product.id,
      changes: {
        name: `Modified from update ${this.product.id}`,
        description: `Modified from update ${this.product.id}`
      }
    }));
  }

}
