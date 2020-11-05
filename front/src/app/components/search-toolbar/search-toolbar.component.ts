import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsittersService } from 'src/app/service/petsitters.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss'],
})
export class SearchToolbarComponent implements OnInit {
  public queryParams;

  public services: Array<any> = [
    {
      name: 'Pet Sitting',
      icon: 'home-outline'
    },
    {
      name: 'Pet Hosting',
      icon: 'home-outline'
    },
    {
      name: 'Dog Walking',
      icon: 'home-outline'
    },
  ];

  constructor(
    private activeRoute: ActivatedRoute,
    public petsittersService: PetsittersService
    ) {
      this.activeRoute.queryParams.subscribe(params => {
        this.queryParams = params;
        console.log('params', this.queryParams);
    });
  }

  ngOnInit() {}

  public goToSearch() {
    this.petsittersService.getAll(this.queryParams).then((data: any) => {
      console.log('data', data, '===', this.queryParams);
    });
  }

  public test() {
    console.log('===', this.queryParams);
  }
}
