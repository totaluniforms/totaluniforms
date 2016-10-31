import { Category } from './../category';
import { RoutesService } from './../routes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public category: Category;

  constructor() { }

  ngOnInit() {

    console.log(this.category);
  }

}
