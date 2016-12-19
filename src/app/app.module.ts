import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { Category } from './category';
import { categories } from './categories';
import { RoutesService } from './routes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoContentComponent } from './no-content/no-content.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavigationComponent,
    NoContentComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: ':category', component: CategoryComponent },
      { path: 'product/:product', component: ProductComponent },
      { path: '**', component: NoContentComponent }
    ])
  ],
  providers: [
    RoutesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
