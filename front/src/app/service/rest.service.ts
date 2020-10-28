import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export class RestService {
  protected baseUrl: string = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  public getAll(): any {
    this.http.get(this.baseUrl).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  protected setBaseUrl(url: string): void {
    this.baseUrl = `${environment.apiUrl}${url}`;
  }
}
