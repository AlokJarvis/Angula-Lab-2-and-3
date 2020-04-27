import { Injectable } from '@angular/core';
import { Product } from './registration/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  sendData(product:Product)
  {
    console.log(product);
  }
}
