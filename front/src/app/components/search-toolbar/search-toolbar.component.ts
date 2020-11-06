import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsittersService } from 'src/app/service/petsitters.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss'],
})
export class SearchToolbarComponent {
  @Output() public search: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  public queryParams = {};

  public services: Array<any> = [
    {
      name: 'Pet Sitting',
      icon: 'home-outline',
      param: 'service',
      option: 'pet-sitting',
    },
    {
      name: 'Pet Hosting',
      icon: 'home-outline',
      param: 'service',
      option: 'pet-hosting',
    },
    {
      name: 'Dog Walking',
      icon: 'home-outline',
      param: 'service',
      option: 'dog-walking',
    },
    {
      name: 'House Visiting',
      icon: 'home-outline',
      param: 'service',
      option: 'house-visiting',
    },
    {
      name: 'Pet Day Care',
      icon: 'dice-outline',
      param: 'service',
      option: 'pet-day-care',
    },
    {
      name: 'Pet Training',
      icon: 'home-outline',
      param: 'service',
      option: 'pet-training',
    },
    {
      name: 'Pet Grooming',
      icon: 'home-outline',
      param: 'service',
      option: 'pet-grooming',
    },
  ];

  public pets: Array<any> = [
    {
      name: 'Dog',
      icon: 'home-outline',
      param: 'pet',
      option: 'dog',
    },
    {
      name: 'Cat',
      icon: 'home-outline',
      param: 'pet',
      option: 'cat',
    },
    {
      name: 'Other',
      icon: 'home-outline',
      param: 'pet',
      option: 'other',
    },
  ];

  constructor(
    private activeRoute: ActivatedRoute,
    public router: Router,
    public petsittersService: PetsittersService
    ) {
      this.activeRoute.queryParams.subscribe(params => {
        this.queryParams = params;
    });
  }

  public onOptionsSelected(value: string){
    this.router.navigate(['/tabs/landing'], {
      queryParams: {
      type: value
    },
      queryParamsHandling: 'merge',
      skipLocationChange: true,
    });
  }
}
