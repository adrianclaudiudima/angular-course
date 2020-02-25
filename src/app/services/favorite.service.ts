import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable()
export class FavoriteService {

  private productsAtFavorite: Array<Product> = [];
  private productsAtFavoriteSubject: Subject<Array<Product>> = new ReplaySubject(1);
  public productsAtFavorite$ = this.productsAtFavoriteSubject.asObservable();

  constructor() {
  }

  public addProductToFavorite(product: Product) {
    if (!this.productsAtFavorite.find(p => p.id === product.id)) {
      this.productsAtFavorite.push(product);
      this.productsAtFavoriteSubject.next(this.productsAtFavorite);
    }
  }

  public removeProductFromFavorite(productId: number) {
    this.productsAtFavorite = this.productsAtFavorite.filter(prod => prod.id !== productId);
    this.productsAtFavoriteSubject.next(this.productsAtFavorite);
  }


}
