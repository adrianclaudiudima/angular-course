import {Action} from '@ngrx/store';
import {ProductCart} from '../../model/product-cart';


export interface CartState {
  productsInCart: Array<ProductCart>;
}

export function cartReducer(state: CartState = {productsInCart: []}, action: Action): CartState {
  return {...state};
}
