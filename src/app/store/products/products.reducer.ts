import {ProductsState} from './index';
import {
  LoadProductsByIdFailedAction,
  LoadProductsByIdSuccessAction,
  LoadProductsFailedAction,
  LoadProductsSuccessAction,
  ProductsActions,
  ProductsActionsType
} from './products.actions';
import {Status} from '../../model/status';


export const initialProductState: ProductsState = {products: [], status: undefined, selectedProduct: undefined};

export function productReducer(state: ProductsState = initialProductState, action: ProductsActionsType): ProductsState {

  switch (action.type) {
    case ProductsActions.LOAD_PRODUCTS: {
      return {
        ...state,
        status: Status.PENDING,
        products: undefined
      };
    }
    case ProductsActions.LOAD_PRODUCTS_FAILED: {
      return {
        ...state,
        status: Status.ERROR,
        products: undefined,
        errorMessage: (action as LoadProductsFailedAction).payload
      };
    }
    case ProductsActions.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        status: Status.COMPLETE,
        errorMessage: undefined,
        products: (action as LoadProductsSuccessAction).payload
      };
    }
    case ProductsActions.LOAD_PRODUCT_BY_ID: {
      return {
        ...state,
        selectedProduct: undefined,
        status: Status.PENDING
      };
    }
    case ProductsActions.LOAD_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        selectedProduct: (action as LoadProductsByIdSuccessAction).payload,
        status: Status.COMPLETE
      };
    }
    case ProductsActions.LOAD_PRODUCT_BY_ID_FAILED: {
      return {
        ...state,
        selectedProduct: undefined,
        status: Status.ERROR,
        errorMessage: `Could not load product by id : ${(action as LoadProductsByIdFailedAction).payload}`
      };
    }

  }

  return {...state};
}
