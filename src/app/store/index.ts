import {InjectionToken} from '@angular/core';
import {ActionReducerMap} from '@ngrx/store';
import {favoriteReducer, FavoriteState} from './favorite/favorite.reducer';
import {cartReducer, CartState} from './cart/cart.reducer';
import {productReducer} from './products/products.reducer';
import {ProductsState} from './products';

export interface ApplicationState {
  favorite: FavoriteState;
  cart: CartState;
  productState: ProductsState;
}

export const appReducerToken = new InjectionToken<ActionReducerMap<ApplicationState>>('Application Reducers');

export function getAppReducers(): ActionReducerMap<ApplicationState> {
  return {
    cart: cartReducer,
    favorite: favoriteReducer,
    productState: productReducer
  };
}

