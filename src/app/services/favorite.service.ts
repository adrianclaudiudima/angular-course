import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {of, ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, switchMap, take} from 'rxjs/operators';

@Injectable()
export class FavoriteService {

  private productsAtFavorite: Array<Product> = [];
  private productsAtFavoriteSubject: Subject<Array<Product>> = new ReplaySubject(1);
  public productsAtFavorite$ = this.productsAtFavoriteSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Array<Product>>('http://localhost:3000/favorite').pipe(
      take(1),
      catchError(error => of([])),
    ).subscribe(response => {
      this.productsAtFavorite = response;
      this.productsAtFavoriteSubject.next(this.productsAtFavorite);
    }, error => {
      // error handling
    }, () => {
      // complete
    });
  }

  public addProductToFavorite(product: Product) {
    if (!this.productsAtFavorite.find(p => p.id === product.id)) {
      this.httpClient.post('http://localhost:3000/favorite', product)
        .pipe(
          switchMap(() => {
            return this.httpClient.get<Array<Product>>('http://localhost:3000/favorite');
          })
        ).subscribe(response => {
        this.productsAtFavorite = response;
        this.productsAtFavoriteSubject.next(this.productsAtFavorite);
      });
    }
  }

  public removeProductFromFavorite(productId: number) {
    this.httpClient.delete(`http://localhost:3000/favorite/${productId}`)
      .pipe(
        take(1),
        switchMap(() => {
          return this.httpClient.get<Array<Product>>('http://localhost:3000/favorite');
        })).subscribe(products => {
      this.productsAtFavorite = products;
      this.productsAtFavoriteSubject.next(this.productsAtFavorite);
    });

  }

}
