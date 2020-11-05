import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SearchToolbarComponent } from '../components/search-toolbar/search-toolbar.component';
import { PetsittersService } from '../service/petsitters.service';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss']
})
export class LandingPage {
  @ViewChild(SearchToolbarComponent) searchToolbar;

  public users = [];

  public title =  'We care for your pet';

  constructor(public petsittersService: PetsittersService) {}

  public findSearchResults() {
    this.petsittersService.getAll(this.searchToolbar.queryParams).then((data: any) => {
      this.users = data;
      console.warn('data', this.users, '===RESULTS===', this.searchToolbar.queryParams);
    });
  }
}
