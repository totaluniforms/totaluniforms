import { Route } from '@angular/router';

export interface Product {
  code: String,
  brand?: String,
  sizes?: String, 
  name: string,
  description?: string,
  image: string
}