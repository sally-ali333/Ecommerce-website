import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  noOfItems: BehaviorSubject<number> = new BehaviorSubject(0);
  // cartId:BehaviorSubject<string>= new BehaviorSubject('')

  constructor(private _httpClient: HttpClient) {

    this.getCart().subscribe({
      next: (res) => {
        this.noOfItems.next(res.numOfCartItems);
        // this.cartId.next(res.data._id)
      },
    });
  }

  addToCart(x: string): Observable<any> {
    return this._httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId: x },
    );
  }

  getCart(): Observable<any> {
    return this._httpClient.get(
      'https://ecommerce.routemisr.com/api/v1/cart',
    );
  }

  updateCart(productId: string, x: number): Observable<any> {
    return this._httpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count: x },
    );
  }

  deleteItem(productId: string): Observable<any> {
    return this._httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`);
  }

  removeCart(): Observable<any> {
    return this._httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`);
  }
}
