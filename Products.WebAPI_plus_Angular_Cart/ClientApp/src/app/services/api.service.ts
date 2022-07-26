import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs';

const DELAY = 3000
const API_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = API_URL;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl;
    console.log({ baseUrl });
  }

  get<T>(path: string) {
    return this.http.get<T>(`${this.apiUrl}${path}`)
      .pipe(delay(DELAY))
  }
}
