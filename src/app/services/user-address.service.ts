import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAddressService {
  constructor(private _httpClient: HttpClient) {}

  addAddress(data: any): Observable<any> {
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/addresses`,
      data
    );
  }

  getSpecificAddress(id:string): Observable<any> {
    return this._httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/addresses/${id}`);
  }

  removeAddress(id:string): Observable<any> {
    return this._httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/addresses/${id}`);
  }

  getUserAddresses(): Observable<any> {
    return this._httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/addresses`);
  }




  
}
