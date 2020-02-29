import {ApplicationState} from '../index';
import {createSelector} from '@ngrx/store';
import {Product} from '../../model/product';

export const appState = (state: ApplicationState) => state;
export const getProductsApplicationState = createSelector(appState, s1 => s1.productState);
export const getProductsArray = createSelector(getProductsApplicationState, s1 => {
  console.log(s1);
  return s1.products;
});

export const getProductFromStateById = createSelector(getProductsArray, (productArray: Product[], productId: number) => {
  return productArray.find(product => product.id === productId);
});
export const getProductsStatus = createSelector(getProductsApplicationState, s1 => s1.status);
export const getProductsErrorMessage = createSelector(getProductsApplicationState, s1 => s1.errorMessage);
export const getTotalNumberOfProducts = createSelector(getProductsArray, s1 => s1.length);
