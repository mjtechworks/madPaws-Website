import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsittersService extends RestService {

  public constructor(protected http: HttpClient) {
    super(http);
    this.setBaseUrl('/api/petsitter.php');
  }
}
