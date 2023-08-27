import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { Order } from 'src/app/interface/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cashorder',
  templateUrl: './cashorder.component.html',
  styleUrls: ['./cashorder.component.css'],
})
export class CashorderComponent implements OnInit {
  userId: string | null = null;
  OrderDetails: Order = {} as Order;

  constructor(private _OrdersService: OrdersService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getUserOrders();
  }

  getUserOrders(): void {
    if (this.userId != null) {
      this._OrdersService.getUserOrders(this.userId).subscribe({
        next: (res) => {
          // console.log(res);
          this.OrderDetails=res[res.length-1];
          // console.log(this.OrderDetails)

        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }


}
