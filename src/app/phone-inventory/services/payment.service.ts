import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CartItem } from '../models/cart-item.interface';
import { Totals } from '../models/totals.interface';

@Injectable()
export class PaymentService {

  cart: CartItem[];
  totals: Totals;

  submitPayment(paymentInfo) {
    if (!this.totals) {
      return;
    }
    const payment = {
      charge: {
        charge: this.totals.amount
      },
      card: {
        cardNumber: paymentInfo.creditCard.cardNumber,
        expiration: paymentInfo.creditCard.expiration,
        ccv: paymentInfo.creditCard.ccv
      },
      billing: {
        fullName: paymentInfo.billing.fullName,
        email: paymentInfo.billing.email,
        address: paymentInfo.billing.address,
        city: paymentInfo.billing.city,
        state: paymentInfo.billing.state,
        zip: paymentInfo.billing.zip
      }
    };
    const order = {
      customer: {
        fullName: paymentInfo.billing.fullName,
        email: paymentInfo.billing.email,
        address: paymentInfo.billing.address,
        city: paymentInfo.billing.city,
        state: paymentInfo.billing.state,
        zip: paymentInfo.billing.zip
      },
      order: []
    };

    for (let i = 0; i < this.cart.length; i++) {
      const item = {
        id: this.cart[i].id,
        quantity: this.cart[i].quantity
      }
      order.order.push(item);
    }

    // Submit payment to processor
    console.log('Payment Details sent: ');
    console.log(payment);

    // Submit order to Database
    console.log('Order Details sent: ');
    console.log(order);
  }

  constructor() { }

}
