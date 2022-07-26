import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../../store/types/app-state.interface';
import { cartItemsCountSelector } from '../../store/selectors/cart.selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  count: Observable<number>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count = this.store.pipe(select(cartItemsCountSelector))
  }
}
