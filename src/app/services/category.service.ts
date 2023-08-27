import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService  {
  constructor(private _httpClient:HttpClient) { 
    
  }

  

  getAllCategories():Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getSubCategories(categoryId:string):Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`)
  }

}
