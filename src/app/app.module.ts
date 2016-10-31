import { RoutesService } from './routes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoContentComponent } from './no-content/no-content.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavigationComponent,
    NoContentComponent,
    CardsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // { path: 'hero/:id', component: HeroDetailComponent },
      // { path: 'crisis-center', component: CrisisListComponent },
      // {
      //   path: 'heroes',
      //   component: HeroListComponent,
      //   data: {
      //     title: 'Heroes List'
      //   }
      // },
      { path: '', redirectTo: '/cards', pathMatch: 'full' },
      { path: 'cards', component: CardsComponent },
      { path: '**', component: NoContentComponent }
    ])    
  ],
  providers: [
    RoutesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
