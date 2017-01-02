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

    private products: Product[];

    constructor() {
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

    public getProducts(category: String): Product[] {
        switch (category) {
            case 'workwear':
                return workwear;
            case 'work-boots':
                return workboots;
            case 'ppe':
                return ppe;
            case 'office':
                return office;
            case 'health-and-beauty':
                return healthandbeauty;
            case 'cafe-and-chef':
                return cafeandchef;
            case 'polos-and-tees':
                return polosandtees;
            case 'proteam':
                return proteam;
            case 'school':
                return school;
            default:
                // TODO Go to home
                return [];
        }
    }

}
