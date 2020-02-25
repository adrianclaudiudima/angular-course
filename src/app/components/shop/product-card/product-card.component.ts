import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../../model/product';
import {showConfigure} from './product-card.animation';
import {Router} from '@angular/router';
import {interval} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {CartService} from '../../../services/cart.service';
import {FavoriteService} from '../../../services/favorite.service';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss'],
  animations: [showConfigure]
})
export class ProductCardComponent implements OnChanges {
  showSuggestion = false;
  isAtFavorite: boolean;
  @Input()
  product: Product;

  constructor(private router: Router, private cartService: CartService, private favoriteService: FavoriteService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    this.favoriteService.addProductToFavorite(this.product);
  }
}
