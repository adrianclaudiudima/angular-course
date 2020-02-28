import {ApplicationState} from '../index';
import {createSelector} from '@ngrx/store';

export const appState = (state: ApplicationState) => state;
export const getProductsState = createSelector(appState, s1 => s1.products);
