import { Action, createReducer, on } from "@ngrx/store";

import { CartState } from "src/app/store/types/cart-state.interface";
import { 
    addItemAction, 
    deleteItemAction,
    clearAction
} from './../actions/cart.actions';

import { CartItem } from '../../types/cart-item.interface';

const CART_ITEMS_KEY = 'cart_items';

const loadFromLocalStorage = (): CartItem[] => 
  JSON.parse(localStorage.getItem(CART_ITEMS_KEY) || '[]');

  const saveToLocalStorage = (items: CartItem[]): void => 
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));

const initialState: CartState = {
    cartItems: loadFromLocalStorage()
};

const cartReducer = createReducer(
    initialState,
    on(
      addItemAction,
      (state, action): CartState => {
        const newState = {
          ...state,
          cartItems: [...state.cartItems, action.cartItem]
        };
        localStorage.removeItem(CART_ITEMS_KEY);
        saveToLocalStorage(newState.cartItems)
        return newState;
      }
    ),
    on(
      deleteItemAction,
      (state, action): CartState => {
        const cartItems = state.cartItems.filter((item) => item.product.id !== action.id)
        const newState= {
          ...state,
          cartItems
        }
        localStorage.removeItem(CART_ITEMS_KEY);
        saveToLocalStorage(newState.cartItems)
        return newState;
      }
    ),
    on(
      clearAction,
      (state): CartState => {
        const cartItems = new Array<CartItem>()
        const newState= {
          ...state,
          cartItems
        }
        localStorage.removeItem(CART_ITEMS_KEY);
        return newState;
      }
    )
  )
  
  export function reducer(state: CartState, action: Action) {
    return cartReducer(state, action)
  }

