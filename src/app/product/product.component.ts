import { Product } from './../product';
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
    private category: String;
    private productId: String;
    private product: Product;
    private recommended: Product[];

    constructor(
        private route: ActivatedRoute,
        private router: RouterModule,
        private routesService: RoutesService) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.category = params['category'];
                this.productId =  params['product'];
                this.product = this.routesService.getProduct(this.productId);
                this.recommended = this.routesService.getRecommended(this.productId);
            });
    }
}
