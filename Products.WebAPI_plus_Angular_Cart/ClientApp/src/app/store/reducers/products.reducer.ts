import { Action, createReducer, on } from "@ngrx/store";

import { 
  loadAction,
  loadSuccessAction,
  loadFailureAction
} from "../actions/products.actions";

import { ProductsState } from "../types/products-state.interface";

const initialState: ProductsState = {
    products: [],
  loading: null,
  error: null
};

const productsReducer = createReducer(
  initialState,
  on(
    loadAction,
    (state): ProductsState => ({
      ...state,
      loading: true,
    })
  ),    
  on(
    loadSuccessAction,
    (state, action): ProductsState => ({
      ...state,
      products: action.products,
      loading: false,
    })
  ),    
  on(
    loadFailureAction,
    (state, action): ProductsState => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),        
)
  
export function reducer(state: ProductsState, action: Action) {
  return productsReducer(state, action)
}
