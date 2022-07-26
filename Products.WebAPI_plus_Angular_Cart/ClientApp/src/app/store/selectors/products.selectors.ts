import { createFeatureSelector, createSelector } from '@ngrx/store'

import { ProductsState } from 'src/app/store/types/products-state.interface';

export const featureSelector = createFeatureSelector<ProductsState>('products')

export const productsSelector = createSelector(
  featureSelector,
  state => state.products
)

export const productSelector = (id: number) => createSelector(
  featureSelector,
  (state) => state.products.find(product => product.id === id)
)

export const loadingSelector = createSelector(
  featureSelector,
  state => state.loading
)

export const errorSelector = createSelector(
  featureSelector,
  state => state.error
)