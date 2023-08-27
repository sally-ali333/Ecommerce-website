import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from 'src/app/interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
})
export class ProductitemComponent {
  @Input() product: Product = {} as Product; // as Product in productinterface contain name,image,title....

  constructor(
    private _cartService: CartService,
    private _wishlistService:WishlistService,
    private _router:Router) {}

  addProductToCart(id: string) {
    if(localStorage.getItem('userToken')){
      this._cartService.addToCart(id).subscribe({
        next: (res) => {
        this._cartService.noOfItems.next(res.numOfCartItems)
       },
        error: (err) => console.log(err),
      });
    }else {    
      this._router.navigate(['/signin']);
    }
  }

  getbestseller(sold:number){
    if(sold > 200){
      return true;
    }else {
      return false
    }
  }

  addToWishlist(id:string){
    if(localStorage.getItem('userToken')){
    this._wishlistService.addProductToWishlist(id).subscribe((res)=>{
      console.log(res)
    })
  }else {
    this._router.navigate(['/signin']);
  }

}
}