import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _httpClient:HttpClient) { }


  addProductToWishlist(id:String):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {"productId":id },)
  }

  removeProductFromWishlist(id:String):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }


  getLoggedUserWishlist():Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
  }
  
}
