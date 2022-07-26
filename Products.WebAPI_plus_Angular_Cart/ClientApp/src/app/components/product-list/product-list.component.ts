import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AppState } from '../../store/types/app-state.interface';
import { 
  productsSelector, 
  loadingSelector, 
  errorSelector
} from '../../store/selectors/products.selectors';

import { Product } from '../../types/product.interface';
import { loadAction } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>
  loading: Observable<boolean>;
  error: Observable<Error>;  

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.products = this.store.pipe(select(productsSelector))
    this.loading = this.store.pipe(select(loadingSelector))
    this.error = this.store.pipe(select(errorSelector))

    this.store.dispatch(loadAction())
  }

  trackProduct(_: number, product: Product) {
    return product.id;
  }  
}
