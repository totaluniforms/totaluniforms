import { Category } from './category';
import { Injectable } from '@angular/core';

@Injectable()
export class RoutesService {

  private categories: Category[];

  constructor() {
    this.categories = [
      {
        name: 'Workwear',
        link: '',
        image: 'tradies.jpg'
      }, {
        name: 'Work Boots',
        link: '',
        image: 'tradie.jpg'
      }, {
        name: 'PPE',
        link: '',
        image: 'tradies.jpg'
      }, {
        name: 'Office',
        link: 'http://www.totaluniforms.com.au/office/',
        image: 'office.jpg'
      }, {
        name: 'Health Beauty',
        link: '',
        image: 'healthcare.jpg'
      }, {
        name: 'Cafe & Chef',
        link: '',
        image: 'cafenchef.jpg'
      }, {
        name: "Polo's & Tee's",
        link: '',
        image: 'polos.jpg'
      }, {
        name: 'ProTEAM',
        link: '',
        image: 'tradies.jpg'
      }, {
        name: 'School',
        link: '',
        image: 'polos.jpg'
      },
    ];
  }

  public getRoutes(): Category[] {
    return this.categories;
  }

}
