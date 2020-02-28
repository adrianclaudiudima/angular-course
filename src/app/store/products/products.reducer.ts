import {ProductsState} from './index';
import {Action} from '@ngrx/store';

export function productReducer(state: ProductsState = {products: [], status: undefined}, action: Action): ProductsState {
  return {...state};
}
