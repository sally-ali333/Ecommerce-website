import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from 'src/app/interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartDetails: Cart = {} as Cart;
  noProductMsg: boolean = false;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._cartService.getCart().subscribe({
      next: (res) => {
        console.log(res);
        this.noProductMsg = false;
        this.cartDetails = res;
      },
      error: (err) => {
        console.log(err);
        this.noProductMsg = true;
      },
    });
  }

  updateCart(id: string, count: number) {
    this._cartService.updateCart(id, count).subscribe({
      next: (res) => {
        this.cartDetails = res;
        if (count == 0) {
          this.deleteItem(id);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteItem(id: string) {
    this._cartService.deleteItem(id).subscribe({
      next: (res) => {
        this.cartDetails = res;
        this._cartService.noOfItems.next(res.numOfCartItems);
        console.log(res.numOfCartItems);

        if (res.numOfCartItems == 0) {
          this.deleteCart();
        }
      },
      error: (err) => console.log(err),
    });
  }

  deleteCart() {
    this._cartService.removeCart().subscribe({
      next: (res) => {
        this.cartDetails = res;
        this.noProductMsg = true;
        this._cartService.noOfItems.next(0);

      },
      error: (err) => console.log(err),
    });
  }
}
