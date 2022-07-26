import { createAction, props } from '@ngrx/store';

import { CartItem } from '../../types/cart-item.interface';

export enum CartActionTypes {
  ADD_ITEM = '[CART] Add Item',
  DELETE_ITEM = '[CART] Delete Item',
  CLEAR = '[CART] Clear',
}

export const addItemAction = createAction(
  CartActionTypes.ADD_ITEM,
  props<{ cartItem: CartItem }>()
)

export const deleteItemAction = createAction(
  CartActionTypes.DELETE_ITEM, 
  props<{ id: number }>()
)

export const clearAction = createAction(
  CartActionTypes.CLEAR 
)
