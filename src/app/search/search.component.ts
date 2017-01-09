import { Product } from './../product';
import { RoutesService } from './../routes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    private subscription: Subscription;

    query: string;

    products: Product[];

    constructor(private route: ActivatedRoute, private routes: RoutesService) {
         this.subscription = route.queryParams.subscribe(
             (queryParam: any) => {
               this.query = queryParam['q'];
               this.products = this.routes.searchForProducts(this.query);
             }
         );
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
