import { Category } from './../category';
import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    
    private categories: Category[];

    constructor(private routesService: RoutesService) {
        this.categories = routesService.getRoutes();
    }

  ngOnInit() {
  }

}
