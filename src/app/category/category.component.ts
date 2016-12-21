import { Product } from './../product';
import { ActivatedRoute } from '@angular/router';
import { RoutesService } from './../routes.service';
import { Category } from './../category';
import { CardComponent } from './../card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    private category: String;
    private products: Product[];

    constructor(
        private route: ActivatedRoute,
        private routesService: RoutesService) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['category'])
            .subscribe(category => {
                this.category = category;
                this.products = this.routesService.getProducts(category);
            });
    }
}
