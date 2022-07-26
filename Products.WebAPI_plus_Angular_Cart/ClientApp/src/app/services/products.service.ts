import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../types/product.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  get(): Observable<Product[]> {
    return this.apiService.get<Product[]>('products')
  }
}
