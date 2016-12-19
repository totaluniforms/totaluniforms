import { Category } from './category';
import { categories } from './categories';
import { Injectable, Component } from '@angular/core';

@Injectable()
export class RoutesService {

  private categories: Category[];

  constructor() {
    this.categories = categories;
  }

  public getRoutes(): Category[] {
    return this.categories;
  }

}
