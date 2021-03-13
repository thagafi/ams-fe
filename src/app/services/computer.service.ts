import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ComputerService extends RestService{
  endpoint(): string {
    return "computers";
  }

  export(): Observable<any> {
    return this.http.get(`${environment.api}/export`, {responseType: 'blob'});
  }
}
