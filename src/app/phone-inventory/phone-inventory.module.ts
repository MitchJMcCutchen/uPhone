import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';
import { PhoneInventoryRoutingModule } from './phone-inventory-routing.module';
import { ReactiveFormsModule } from '@angular/forms'

import { BillingInfoComponent } from './components/billing-info/billing-info.component';
import { CartComponent } from './components/cart/cart.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardDirective } from './directives/credit-card.directive';
import { ExpirationDirective } from './directives/expiration.directive';
import { PaymentComponent } from './containers/payment/payment.component';
import { PhoneStockComponent } from './containers/phone-stock/phone-stock.component';
import { PhoneSelectorComponent } from './components/phone-selector/phone-selector.component';

import { PaymentService } from './services/payment.service';
import { PhoneStockService } from './services/phone-stock.service';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    PhoneInventoryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CartComponent,
    CreditCardDirective,
    PaymentComponent,
    PhoneStockComponent,
    PhoneSelectorComponent,
    BillingInfoComponent,
    CreditCardComponent,
    ExpirationDirective,
    ConfirmationComponent
  ],
  providers: [
    PaymentService,
    PhoneStockService
  ],
  exports: [
    PhoneStockComponent
  ]
})
export class PhoneInventoryModule { }
