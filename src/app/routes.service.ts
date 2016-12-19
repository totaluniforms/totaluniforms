import { workboots } from './data/categories/work-boots.products';
import { office } from './data/categories/office.products';
import { Category } from './category';
import { categories } from './data/categories';
import { workwear } from './data/categories/workwear.products';
import { Injectable, Component } from '@angular/core';

@Injectable()
export class RoutesService {

  constructor() {
  }

  public getRoutes(): Category[] {
    return categories;
  }

  public getProducts(category: String): Category[] {
    switch (category) {
      case 'workwear':
        return workwear;
      case 'work-boots':
        return workboots;
      case 'office':
        return office;
      default:
        // TODO Go to home
        return categories;
    }
  }

}
