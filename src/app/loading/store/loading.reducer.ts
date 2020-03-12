import {LoadingActions, LoadingActionsType} from './loading.actions';
import {ApplicationState} from '../../store';
import {createSelector} from '@ngrx/store';

export const getLoadingState = (appState: ApplicationState) => appState.loadingState;
export const getLoadingCounter = createSelector(getLoadingState, s1 => s1.requestCounter);

export interface LoadingState {
  requestCounter: number;
}


export const initialLoadingState: LoadingState = {
  requestCounter: 0
};

export function loadingReducer(state: LoadingState = initialLoadingState, action: LoadingActionsType): LoadingState {
  switch (action.type) {
    case LoadingActions.INCREMENT_LOADING: {
      return {...state, requestCounter: state.requestCounter + 1};
    }
    case LoadingActions.DECREMENT_LOADING: {
      return {...state, requestCounter: state.requestCounter - 1};
    }
  }
  return {...state};
}


