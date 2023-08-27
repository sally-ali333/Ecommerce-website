import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _httpClient: HttpClient) {}

  createCashOrder(cartId: string, x: any): Observable<any> {
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      { shippingAddress: x }
    );
  }

  getAllOrders(): Observable<any> {
    return this._httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/`
    );
  }

  getUserOrders(UserId: string): Observable<any> {
    return this._httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${UserId}`
    );
  }

  goToOnlinepayment(cartId: string, x: any): Observable<any> {
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: x }
    );
  }
}
