import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  loadAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>('http://localhost:3000/products');
  }

  loadProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

}
