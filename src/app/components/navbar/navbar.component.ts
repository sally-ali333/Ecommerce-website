import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  name: string = '';
  noOfItems: number = 0;

  constructor(
    private _authService: AuthService,
    private _cartService: CartService) {  }

  ngOnInit(): void {
    this.getName()
    this.getNoItems();
    this.LogInOrNot();
  }

  LogInOrNot() {
    this._authService.userData.subscribe((res) => {
      if (this._authService.userData.getValue()) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  getNoItems(){
    this._cartService.noOfItems.subscribe({
      next: (res) => {
        this.noOfItems = res;
      },
    });
  }

  

  getName() {
    this._authService.userName.subscribe({
      next: (res) => {
        this.name=res
      },
    });
  }
       


  signOut() {
    this._authService.signOut();
  }
}
