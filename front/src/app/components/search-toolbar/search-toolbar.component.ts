import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss'],
})
export class SearchToolbarComponent implements OnInit {

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

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {}

  goToSearch() {
    this.router.navigate(['tabs/search'], { queryParams: {
      'type': 'dog',
      'services': 'house',
      'competitors': 'momo'
    }});
  }
}
