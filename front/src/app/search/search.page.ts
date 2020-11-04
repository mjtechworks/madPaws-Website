import { Component, OnInit } from '@angular/core';
import { PetsittersService } from '../service/petsitters.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {

  constructor(public petsittersService: PetsittersService) {}

  ngOnInit(): void {
    this.getPetsitters();
  }

  public getPetsitters(): any {
    this.petsittersService.getAll().then((data: any) => {
      console.log('data', data);
    });
    // .subscribe(data => {
    //   console.warn('data', data);
    // }, err => {
    //   console.log('ERROR', err);
    // });
  }
}
