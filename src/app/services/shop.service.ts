import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {concat, merge, Observable, ReplaySubject, Subject} from 'rxjs';
import {concatMap, delay, flatMap, map, mergeAll, tap} from 'rxjs/operators';

@Injectable()
export class ShopService {

  private listOfProducts: Array<Product> = [];
  private listOfProductsSubject: Subject<Array<Product>> = new ReplaySubject(1);
  public listOfProducts$: Observable<Array<Product>> = this.listOfProductsSubject.asObservable();


  constructor(private httpClient: HttpClient) {
    // Normally we should have a proxy at localhost:4200/api which redirects the API calls to localhost:3000 so the domain
    // will not change and we won't have CORS issues. This mock server has CORS configured to allow requests from each domain.
    // Whenever the browsers sees the domain is changing, an OPTION request is sent to the server to see if it allows the other domain
    // to do a request.
    this.httpClient.get<Array<Product>>('http://localhost:3000/products').subscribe(products => {
      this.listOfProducts = products;
      this.listOfProductsSubject.next(this.listOfProducts);
    });

  }

}
