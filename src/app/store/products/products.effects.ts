import {Injectable} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  LoadProductsAction,
  LoadProductsByIdAction, LoadProductsByIdFailedAction, LoadProductsByIdSuccessAction,
  LoadProductsFailedAction,
  LoadProductsSuccessAction,
  ProductsActions
} from './products.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ProductsEffects {

  constructor(private productsService: ProductsService, private actions: Actions) {
  }

  @Effect()
  loadProductsEffect$ = this.actions.pipe(
    ofType<LoadProductsAction>(ProductsActions.LOAD_PRODUCTS),
    switchMap(() => {
      return this.productsService.loadAllProducts()
        .pipe(
          map(productsResponse => new LoadProductsSuccessAction(productsResponse)),
          catchError(error => of(new LoadProductsFailedAction('Something went wrong')))
        );
    })
  );

  @Effect()
  loadProductByIdEffect$ = this.actions.pipe(
    ofType<LoadProductsByIdAction>(ProductsActions.LOAD_PRODUCT_BY_ID),
    switchMap(action => {
      return this.productsService.loadProductById(action.payload).pipe(
        map(product => new LoadProductsByIdSuccessAction(product)),
        catchError(error => of(new LoadProductsByIdFailedAction('Something went wrong')))
      );
    })
  );


}
