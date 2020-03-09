import {Action} from '@ngrx/store';
import {Product} from '../../model/product';
import {Update} from '@ngrx/entity';

export enum FavoriteActions {
  ADD_TO_FAVORITE = '[FAVORITE] Add to favorite',
  REMOVE_FROM_FAVORITE = '[FAVORITE] Remove from favorite',
  UPDATE_PRODUCT_FROM_FAVORITE = '[FAVORITE] Update product from favorite'
}

export class UpdateFavoriteAction implements Action {

  readonly type = FavoriteActions.UPDATE_PRODUCT_FROM_FAVORITE;

  constructor(public payload: Update<Product>) {
  }

}

export class AddToFavoriteAction implements Action {

  readonly type = FavoriteActions.ADD_TO_FAVORITE;

  constructor(public payload: Product) {
  }

}

export class RemoveFromFavoriteAction implements Action {

  readonly type = FavoriteActions.REMOVE_FROM_FAVORITE;

  constructor(public payload: number) {
  }
}

export type FavoriteActionsType = AddToFavoriteAction | RemoveFromFavoriteAction | UpdateFavoriteAction;
