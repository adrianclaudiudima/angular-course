import {Action} from '@ngrx/store';

export enum LoadingActions {
  INCREMENT_LOADING = '[LOADING] Increment loading',
  DECREMENT_LOADING = '[LOADING] Decrement loading',
}

export class IncrementLoadingAction implements Action {

  readonly type = LoadingActions.INCREMENT_LOADING;
}

export class DecrementLoadingAction implements Action {
  readonly type = LoadingActions.DECREMENT_LOADING;
}

export type LoadingActionsType = IncrementLoadingAction | DecrementLoadingAction;
