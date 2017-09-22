import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './containers/payment/payment.component'
import { PhoneStockComponent } from './containers/phone-stock/phone-stock.component';

const routes: Routes = [
  {path: '', redirectTo: '/pre-order', pathMatch: 'full'},
  { path: 'pre-order', component: PhoneStockComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PhoneInventoryRoutingModule { }
