import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetsittersService } from '../service/petsitters.service';

@Component({
  selector: 'app-message',
  templateUrl: 'message.page.html',
  styleUrls: ['message.page.scss']
})
export class MessagePage implements OnInit {
  public data: any;

  constructor(
  public http: HttpClient,
  public petsittersService: PetsittersService
  ) {}

  ngOnInit() {
    this.getPetsitters();
  }

  public getPetsitters(): any {
    this.petsittersService.getAll();
  }
}
