import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interface/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  userId: string | null = null;
  allOrders: Order[] = [];
  OrderDetails: Order = {} as Order;
  showOrder: boolean = false;
  noOrderMsg: boolean = false;

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
          if ((res.length == 0)) {
            this.noOrderMsg = true;
          }else {
            this.noOrderMsg = false;
            this.allOrders = res;

          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  showDetils(id: string) {
    for (let i = 0; i < this.allOrders.length; i++) {
      if (this.allOrders[i]._id == id) {
        this.OrderDetails = this.allOrders[i];
      }
    }
    this.showOrder = true;
  }
}
