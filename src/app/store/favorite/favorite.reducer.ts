import {Action} from '@ngrx/store';
import {Product} from '../../model/product';

export interface FavoriteState {
  productsAtFavorite: Array<Product>;
}

export function favoriteReducer(state: FavoriteState = {productsAtFavorite: []}, action: Action): FavoriteState {
  return {...state};
}
