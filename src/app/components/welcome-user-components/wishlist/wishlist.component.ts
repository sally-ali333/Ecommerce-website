import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/interface/wishlist';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlistProducts: Wishlist = {} as Wishlist;
  noProductMsg: boolean = false;

  constructor(
    private _wishlistService: WishlistService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getLoggedUserWishlist();
  }

  removeFromWishlist(id: String) {
    this._wishlistService.removeProductFromWishlist(id).subscribe({
      next: (res) => {
        console.log(res);
        this.getLoggedUserWishlist();
      },
    });
  }

  addToCart(id: string) {
    this._cartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._cartService.noOfItems.next(res.numOfCartItems);
        this.removeFromWishlist(id);
      },
    });
  }

  getLoggedUserWishlist() {
    this._wishlistService.getLoggedUserWishlist().subscribe({
      next: (res) => {
        // console.log(res)
        if (res.data.length == 0) {
          this.noProductMsg = true;
        } else {
          this.noProductMsg = false;
          this.wishlistProducts = res;
        }
      },
      error: (err) => console.log(err),
    });
  }
}
