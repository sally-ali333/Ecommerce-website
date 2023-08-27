import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashorderComponent } from './cashorder/cashorder.component';
import { GetDatePipe } from 'src/app/pipes/get-date.pipe';
import { PaidOrderPipe } from 'src/app/pipes/paid-order.pipe';


@NgModule({
  declarations: [
    OrdersComponent,
    CheckoutComponent,
    CashorderComponent,
    GetDatePipe,
    PaidOrderPipe
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class OrdersModule { }
