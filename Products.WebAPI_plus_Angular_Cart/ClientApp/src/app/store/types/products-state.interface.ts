import { Product } from '../../types/product.interface';

export interface ProductsState {
    products: Array<Product>
    loading: boolean
    error: Error
}
