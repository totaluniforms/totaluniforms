import { CardComponent } from './../card/card.component';
import { Component, OnInit } from '@angular/core';

interface Category {
  name: string,
  link: string,
  image: string
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
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

  ngOnInit() {
  }

}
