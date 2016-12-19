import { ActivatedRoute, RouterModule } from '@angular/router';
import { RoutesService } from './../routes.service';
import { Category } from './../category';
import { CardComponent } from './../card/card.component';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    private product: String;
    private products: Category[];

    constructor(
        private route: ActivatedRoute,
        private router: RouterModule,
        private routesService: RoutesService) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['product'])
            .subscribe(product => {
                this.product = product;
                this.products = this.routesService.getRoutes()
            });
    }
}
