import { Injectable } from '@angular/core'

import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { 
    loadAction, 
    loadFailureAction, 
    loadSuccessAction 
} from '../actions/products.actions';

import { Product } from '../../types/product.interface';
import { ProductsService } from './../../services/products.service';

@Injectable()
export class ProductsEffects {
  loadShopping = createEffect(() =>
    this.actions.pipe(
      ofType(loadAction),
      mergeMap(() =>
        this.svc.get().pipe(
          map((data: Array<Product>) => {
            return loadSuccessAction({ products: data })
          }),
          catchError((error) => of(loadFailureAction({ error })))
        )
      )
    )
  )

  constructor(
    private actions: Actions,
    private svc: ProductsService
  ) {}
}
