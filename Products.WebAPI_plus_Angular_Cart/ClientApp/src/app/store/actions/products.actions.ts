import { createAction, props } from '@ngrx/store';

import { Product } from '../../types/product.interface';

export enum ProductsActionTypes {
  LOAD = '[PRODUCTS] Load',
  LOAD_SUCCESS = '[PRODUCTS] Load Success',
  LOAD_FAILURE = '[PRODUCTS] Load Failure',
}

export const loadAction = createAction(
  ProductsActionTypes.LOAD
)

export const loadSuccessAction = createAction(
  ProductsActionTypes.LOAD_SUCCESS,
  props<{ products: Product[] }>()
)

export const loadFailureAction = createAction(
  ProductsActionTypes.LOAD_FAILURE,
  props<{ error: Error }>()
)
