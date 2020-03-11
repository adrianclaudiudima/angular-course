import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {API_ROOT} from './api-urls';

@Injectable()
export class ProductsService {

  PRODUCTS_API_ROOT = API_ROOT + '/products';

  constructor(private httpClient: HttpClient) {
  }

  loadAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.PRODUCTS_API_ROOT);
  }

  loadProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.PRODUCTS_API_ROOT}/${id}`);
  }

}
