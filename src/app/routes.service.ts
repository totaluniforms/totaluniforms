import { Product } from './product';
import { Injectable, Component } from '@angular/core';

import { ppe } from './data/categories/ppe.products';
import { healthandbeauty } from './data/categories/health-and-beauty.products';
import { cafeandchef } from './data/categories/cafe-and-chef.products';
import { polosandtees } from './data/categories/polos-and-tees.products';
import { proteam } from './data/categories/proteam.products';
import { school } from './data/categories/school.products';
import { workboots } from './data/categories/work-boots.products';
import { office } from './data/categories/office.products';
import { workwear } from './data/categories/workwear.products';

import { Category } from './category';
import { categories } from './data/categories';

import { Observable } from '@reactivex/rxjs';
import * as _ from 'lodash';

@Injectable()
export class RoutesService {

    private productMap: Map<String, Product[]> = new Map<String, Product[]>();
    private products: Product[];

    constructor() {
        let categoryBuilder = (category: String, products: Product[]) => {
            _.each(products, product => {
                if(!product.category) {
                    product.category = category;
                }
            });

            this.productMap.set(category, products);
        };

        categoryBuilder('workwear', workwear);
        categoryBuilder('work-boots', workboots);
        categoryBuilder('ppe', ppe);
        categoryBuilder('office', office);
        categoryBuilder('health-and-beauty', healthandbeauty);
        categoryBuilder('cafe-and-chef', cafeandchef);
        categoryBuilder('polos-and-tees', polosandtees);
        categoryBuilder('proteam', proteam);
        categoryBuilder('school', school);

        this.products = _.flatten([ppe, healthandbeauty, cafeandchef, polosandtees, proteam, school, workboots, office, workwear]);
    }

    public getRoutes(): Category[] {
        return categories;
    }

    public getProduct(productCode: String): Product {
        var filteredProducts = _.filter(this.products, product => {
            return product.code == productCode;
        });

        if (!filteredProducts.length) {
            let message = "No product with code: " + productCode;
            console.error(message);
            throw new Error(message);
        }

        return filteredProducts[0];
    }

    public getRecommended(productCode: String, size: number = 3): Product[] {
        var filteredProducts = _.filter(this.products, product => {
            return product.code !== productCode;
        });

        if (!filteredProducts.length) {
            let message = "No product with code: " + productCode;
            console.error(message);
            throw new Error(message);
        }

        return _.sampleSize(filteredProducts, size);
    }

    public getProducts(category: String): Product[] {

        if(this.productMap.has(category)) {
            return this.productMap.get(category);
        }

        return [];
    }

}
