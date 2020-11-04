import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export class RestService {
  protected baseUrl: string = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  public getAll(type: string = 'dog'): Promise<any> {

    return this.http.get(this.baseUrl, {
      params: {
        type,
      }
    }).toPromise();
  }

  protected setBaseUrl(url: string): void {
    this.baseUrl = `${environment.apiUrl}${url}`;
  }
}
