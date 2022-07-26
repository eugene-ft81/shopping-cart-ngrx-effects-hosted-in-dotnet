import { createFeatureSelector, createSelector } from '@ngrx/store'

import { CartState } from 'src/app/store/types/cart-state.interface';

export const featureSelector = createFeatureSelector<CartState>('cart')

export const cartItemsSelector = createSelector(
  featureSelector,
  state => state.cartItems
)

export const cartItemsCountSelector = createSelector(
  featureSelector,
  state => state.cartItems.length
)
