import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpacexapiService {
  constructor(private http: HttpClient) {}

  getMissionApi(): any {
    let res = this.http.get('https://api.spacexdata.com/v3/launches');
    return res;
  }
}
