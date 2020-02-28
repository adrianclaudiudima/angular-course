import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../../services/shop.service';
import {Product} from '../../../model/product';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {ProductsState} from '../../../store/products';
import {getProductsState} from '../../../store/products/products.selectors';

@Component({
  selector: 'app-shop-list',
  templateUrl: 'shop-list.component.html',
  styleUrls: ['shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  listOfProducts$: Observable<Array<Product>>;

  productsState$: Observable<ProductsState>;

  constructor(private shopService: ShopService, private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    this.listOfProducts$ = this.shopService.listOfProducts$;
    this.productsState$ = this.store.pipe(select(getProductsState));
  }


  loadProductsFailed() {
  }

  loadProductsSuccess() {

  }

  loadProducts() {
  }

}
