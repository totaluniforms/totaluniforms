import { Router, ActivatedRoute } from '@angular/router';
import { Category } from './../category';
import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private categories: Category[];

  private showSearch = false;

  constructor(private route: ActivatedRoute,
      private router: Router,
      private routesService: RoutesService) {
    this.categories = routesService.getRoutes();
  }

  ngOnInit() {
  }

  search(searchField) {
    this.router.navigate(['/search'], { queryParams: { q: searchField.value } });
    searchField.value = '';
  }

  toggleSearchBar() {
    this.showSearch = !this.showSearch
  }

}
