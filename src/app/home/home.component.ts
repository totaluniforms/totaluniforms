import { RoutesService } from './../routes.service';
import { Category } from './../category';
import { CardComponent } from './../card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private categories: Category[];

    constructor(private routesService: RoutesService) {
        this.categories = routesService.getRoutes();
    }

    ngOnInit() {
    }

}
