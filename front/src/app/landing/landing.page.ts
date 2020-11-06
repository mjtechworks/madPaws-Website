import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SearchToolbarComponent } from '../components/search-toolbar/search-toolbar.component';
import { PetsittersService } from '../service/petsitters.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss']
})
export class LandingPage {
  @ViewChild(SearchToolbarComponent) searchToolbar;

  public users = [];
  public notFoundMessage: string;

  constructor(public petsittersService: PetsittersService) {}

  public findSearchResults(): void {
    this.petsittersService.getAll(this.searchToolbar.queryParams).then((data: any) => {
      this.users = data;

      if (!this.users.length) {
        this.notFoundMessage = 'No users found';
      }
    });
  }
}
