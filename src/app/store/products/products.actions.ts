import {Action} from '@ngrx/store';
import {Product} from '../../model/product';

export enum ProductsActions {
  LOAD_PRODUCTS = '[PRODUCTS] Load products',
  LOAD_PRODUCTS_SUCCESS = '[PRODUCTS] Load products success',
  LOAD_PRODUCTS_FAILED = '[PRODUCTS] Load products failed',
  LOAD_PRODUCT_BY_ID = '[PRODUCTS] Load product by id',
  LOAD_PRODUCT_BY_ID_SUCCESS = '[PRODUCTS] Load product by id success',
  LOAD_PRODUCT_BY_ID_FAILED = '[PRODUCTS] Load product by id failed',
}

export class LoadProductsByIdAction implements Action {
  type = ProductsActions.LOAD_PRODUCT_BY_ID;

  constructor(public payload: number) {
  }

}

export class LoadProductsByIdSuccessAction implements Action {
  type = ProductsActions.LOAD_PRODUCT_BY_ID_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class LoadProductsByIdFailedAction implements Action {
  type = ProductsActions.LOAD_PRODUCT_BY_ID_FAILED;

  constructor(public payload: string) {
  }
}

export class LoadProductsAction implements Action {
  type = ProductsActions.LOAD_PRODUCTS;
}

export class LoadProductsSuccessAction implements Action {
  type = ProductsActions.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Array<Product>) {
  }
}

export class LoadProductsFailedAction implements Action {
  type = ProductsActions.LOAD_PRODUCTS_FAILED;

  constructor(public payload: string) {
  }

}

export type ProductsActionsType = LoadProductsAction | LoadProductsSuccessAction | LoadProductsFailedAction |
  LoadProductsByIdAction | LoadProductsByIdSuccessAction | LoadProductsByIdFailedAction;
