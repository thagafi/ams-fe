import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends RestService{
  endpoint(): string {
    return "brands";
  }
}
