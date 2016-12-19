import { ppe } from './data/categories/ppe.products';
import { healthandbeauty } from './data/categories/health-and-beauty.products';
import { cafeandchef } from './data/categories/cafe-and-chef.products';
import { polosandtees } from './data/categories/polos-and-tees.products';
import { proteam } from './data/categories/proteam.products';
import { school } from './data/categories/school.products';
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
      case 'ppe':
        return ppe;
      case 'office':
        return office;
      case 'health-and-beauty':
        return healthandbeauty;
      case 'cafe-and-chef':
        return cafeandchef;   
      case 'polos-and-tees':
        return polosandtees;
      case 'proteam':
        return proteam;
      case 'school':
        return school;                
      default:
        // TODO Go to home
        return categories;
    }
  }

}
