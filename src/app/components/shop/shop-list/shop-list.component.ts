import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {getProductsArray, getProductsErrorMessage, getProductsStatus} from '../../../store/products/products.selectors';
import {Status} from '../../../model/status';
import {LoadProductsAction, LoadProductsFailedAction, LoadProductsSuccessAction} from '../../../store/products/products.actions';

@Component({
  selector: 'app-shop-list',
  templateUrl: 'shop-list.component.html',
  styleUrls: ['shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  listOfProducts$: Observable<Array<Product>>;
  productsStatus$: Observable<Status>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    this.listOfProducts$ = this.store.pipe(
      select(getProductsArray),
    );
    this.productsStatus$ = this.store.pipe(
      select(getProductsStatus)
    );
    this.errorMessage$ = this.store.pipe(
      select(getProductsErrorMessage)
    );
  }


  loadProductsFailed() {
    this.store.dispatch(new LoadProductsFailedAction('Could not load products. Service is down'));
  }

  loadProductsSuccess() {
    this.store.dispatch(new LoadProductsSuccessAction([
      {
        id: 1,
        name: 'Montes nascetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        imageUrl: 'https://source.unsplash.com/random/1200x900',
        price: 330
      },
      {
        id: 2,
        name: 'Id neque aliquam',
        description: 'Diam quam nulla porttitor massa id neque aliquam. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Faucibus in ornare quam viverra orci sagittis.',
        imageUrl: 'https://source.unsplash.com/random/1200x901',
        price: 180
      },
      {
        id: 3,
        name: 'Diam quam nulla ',
        description: 'Quis commodo odio aenean sed adipiscing diam donec adipiscing. Ut aliquam purus sit amet luctus venenatis lectus. ',
        imageUrl: 'https://source.unsplash.com/random/1200x902',
        price: 220
      }
    ]));
  }

  loadProducts() {
    this.store.dispatch(new LoadProductsAction());
  }

}
