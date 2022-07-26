import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { AppState } from 'src/app/store/types/app-state.interface';
import { addItemAction } from './../../store/actions/cart.actions';
import { productSelector } from '../../store/selectors/products.selectors';

import { Product } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Observable<Product>// | undefined;

  constructor(
    private route: ActivatedRoute, 
    private store: Store<AppState>) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const id = Number(params.get('id'));
    this.product = this.store.pipe(select(productSelector(id)))
  }

  add(product: Product) {
    const item = { cartItem: { product, quantity: 1 }};
    this.store.dispatch(addItemAction(item))
    window.alert(`product ${product.name} added to cart`);
  }
}
