import { CartState } from "./cart-state.interface";
import { ProductsState } from "./products-state.interface";

export interface AppState {
    readonly cartState: CartState
    readonly productsState: ProductsState
}
