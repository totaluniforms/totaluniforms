import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { Category } from './category';
import { categories } from './data/categories';
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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchComponent } from './search/search.component';

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
    ContactUsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'search', component: SearchComponent },
      { path: ':category', component: CategoryComponent },
      { path: ':category/:product', component: ProductComponent },
      { path: '**', component: NoContentComponent }
    ])
  ],
  providers: [
    RoutesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
