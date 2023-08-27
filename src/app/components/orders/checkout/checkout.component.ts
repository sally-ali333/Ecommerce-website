import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../../../services/city.service';
import { OrdersService } from '../../../services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, City } from 'src/app/interface/address';
import { UserAddressService } from 'src/app/services/user-address.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cityList: City[] = [];
  allAddresses: Address[] = [];
  notValidForm: boolean = false;
  isLoading: boolean = false;
  cartId: string = '';
  selectedPay: string = '';

  constructor(
    private _userAddressService: UserAddressService,
    private _cityService: CityService,
    private _ordersService: OrdersService,
    private _CartService:CartService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.cartId = res.params.cartId;
    });
  }

  ngOnInit(): void {
    this.getcities();
    this.getAddress();
  }

  getcities() {
    this._cityService.getcities().subscribe({
      next: (res) => {
        this.cityList = res.results;
        // console.log(res);
      },
      error: (err) => console.log(err),
    });
  }

  getAddress() {
    this._userAddressService.getUserAddresses().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.allAddresses = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  shippingAddress: FormGroup = new FormGroup({
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    city: new FormControl(null, [Validators.required]),
    details: new FormControl(null, [Validators.required]),
  });

  onSelected(value: string): void {
    this.selectedPay = value;
    if (this.selectedPay.includes('cash')) {
      this.payCash(this.shippingAddress);
    } else {
      this.payOnline(this.shippingAddress);
    }
  }

  payCash(form: FormGroup) {
    if (form.valid) {
      this.isLoading = true;
      this._ordersService
        .createCashOrder(this.cartId, this.shippingAddress.value)
        .subscribe({
          next: (res) => {
            // console.log(res.data);
            this.isLoading = false;
            this._router.navigate(['/allorders/cashorder']);
            this._CartService.noOfItems.next(0)
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.notValidForm = true;
    }
  }

  payOnline(form: FormGroup) {
    if (form.valid) {
      this.isLoading = true;
      this._ordersService
        .goToOnlinepayment(this.cartId, this.shippingAddress.value)
        .subscribe({
          next: (res) => {
            // console.log(res);
            // window.open(res.session.url)
            this.isLoading = false;
            window.location.href = res.session.url;
          },
        });
    } else {
      this.notValidForm = true;
    }
  }
}
