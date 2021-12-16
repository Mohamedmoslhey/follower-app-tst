import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).map(response => response);
  }
  delIt(id: any) {
    return this.http.delete(this.url + '/' + id).map(response => response);
  }

  createIt(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource)).map(response => response);
  }
  updateIt(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({
      isRead: true
    })).map(response => response);
  }
}
