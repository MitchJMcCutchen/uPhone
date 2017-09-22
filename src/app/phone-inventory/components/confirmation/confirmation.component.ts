import { Component, OnInit } from '@angular/core';

import { PaymentService } from '../../services/payment.service';

import { CartItem } from '../../models/cart-item.interface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  cart: CartItem[];

  constructor(private payment: PaymentService) { }

  ngOnInit() {
    this.cart = this.payment.cart;
  }

}
