import {Product} from '../../model/product';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {FavoriteActions, FavoriteActionsType} from './favorite.actions';
import {ApplicationState} from '../index';
import {createSelector} from '@ngrx/store';

export const entityAdapter = createEntityAdapter<Product>();
export const favoriteInitialState = entityAdapter.getInitialState();

export const getFavoriteState = (appState: ApplicationState) => appState.favorite;
export const getAllProductsAtFavorite = createSelector(getFavoriteState, entityAdapter.getSelectors().selectAll);
export const getTotalProductsAtFavorite = createSelector(getFavoriteState, entityAdapter.getSelectors().selectTotal);
export const isProductAtFavorite = createSelector(getFavoriteState, (favoriteState: FavoriteStateEntity, productId: number) => {
  return !!favoriteState.entities[productId];
});

export interface FavoriteState {
  productsAtFavorite: Array<Product>;
}

export interface FavoriteStateEntity extends EntityState<Product> {

}

export function favoriteReducer(state: FavoriteStateEntity = favoriteInitialState, action: FavoriteActionsType): FavoriteStateEntity {
  switch (action.type) {
    case FavoriteActions.ADD_TO_FAVORITE: {
      return entityAdapter.addOne(action.payload, state);
    }
    case FavoriteActions.REMOVE_FROM_FAVORITE: {
      return entityAdapter.removeOne(action.payload, state);
    }
    case FavoriteActions.UPDATE_PRODUCT_FROM_FAVORITE: {
      return entityAdapter.updateOne(action.payload, state);
    }
  }

  return {...state};
}
