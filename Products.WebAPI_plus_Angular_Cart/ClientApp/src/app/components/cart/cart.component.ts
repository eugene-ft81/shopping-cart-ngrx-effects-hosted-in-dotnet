import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/types/app-state.interface';
import { 
  clearAction,
  deleteItemAction,
} from './../../store/actions/cart.actions';
import { cartItemsSelector } from '../../store/selectors/cart.selectors';

import { CartItem } from './../../types/cart-item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Observable<CartItem[]>;
  
  form  = this.fb.group({
    name: '',
    address: ''      
  })

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.items = this.store.pipe(select(cartItemsSelector))
  }

  delete(id: number): void {
    this.store.dispatch(deleteItemAction({ id }))
  }

  submit(): void {
    this.store.dispatch(clearAction())

    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
