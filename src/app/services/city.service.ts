import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private _httpclient: HttpClient) {}

  getcities(): Observable<any> {
    return this._httpclient.get(
      'https://parseapi.back4app.com/classes/City?order=-population&keys=name');}
      // {
      //   headers: {
      //     'X-Parse-Application-Id': '45xTnNyaGp6x9HEIH77Y531d8L5dkIrYDN0tAP8y', // This is the fake app's application id
      //     'X-Parse-Master-Key': 'FqDeYeNqkOl13b0W26ClmmSVrEsY59ZzUgDfgAaS', // This is the fake app's readonly master key
      //   }
      // }




  }
