import { RoutesService } from './../routes.service';
import { Category } from './../category';
import { CardComponent } from './../card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    private categories: Category[];

    constructor(private routesService: RoutesService) {
        this.categories = routesService.getRoutes();
    }

    ngOnInit() {
    }

}
