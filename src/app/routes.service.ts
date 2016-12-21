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
import { Category } from './category';
import { categories } from './data/categories';
import { workwear } from './data/categories/workwear.products';

@Injectable()
export class RoutesService {

    constructor() {
    }

    public getRoutes(): Category[] {
        return categories;
    }

    public getProduct(productId: String): Product {
        switch (productId) {
            case '1':
                return {
                    id: "1",
                    name: "Work Shirt",
                    description: "Shirt for Work",
                    image: "tradie.jpg"
                };
            case '2':
                return {
                    id: "2",
                    name: "Work Boots",
                    description: "Boots for Work",
                    image: "tradies.jpg"
                };
            case '3':
                return {
                    id: "3",
                    name: "Pants",
                    description: "cafenchef",
                    image: "tradie.jpg"
                };
            case '4':
                return {
                    id: "4",
                    name: "Health Shirt",
                    description: "Shirt for Work",
                    image: "healthcare.jpg"
                };                                                
            default:
              return {
                    id: "100",
                    name: "Work Shirt",
                    description: "Shirt for Work",
                    image: "tradie.jpg"
                }
        }
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
