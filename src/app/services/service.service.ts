import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpService: HttpClient) { }

  getData() {
    return this.httpService.get('https://api.ask-jennie.com/v1/automation/angular-ui-lib/list/');
   }

}
