import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CashorderComponent } from './cashorder/cashorder.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'checkout/:cartId', component: CheckoutComponent },
  { path: 'cashorder', component: CashorderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
