import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {ProductCart} from '../model/product-cart';

@Injectable()
export class CartService {

  private productsInCart: Array<ProductCart> = [];
  private productsInCartSubject: Subject<Array<ProductCart>> = new ReplaySubject(1);
  public productsInCart$: Observable<Array<ProductCart>> = this.productsInCartSubject.asObservable();


  addProductToCart(product: Product) {
    const alreadyProduct: ProductCart = this.productsInCart.find(p => p.product.id === product.id);
    if (alreadyProduct) {
      alreadyProduct.quantity = alreadyProduct.quantity + 1;
    } else {
      this.productsInCart.push({product, quantity: 1});
    }
    this.productsInCartSubject.next(this.productsInCart);

  }

  removeProductFromCart(productId: number) {
    this.productsInCart = this.productsInCart.filter(product => product.product.id !== productId);
    this.productsInCartSubject.next(this.productsInCart);
  }


}
