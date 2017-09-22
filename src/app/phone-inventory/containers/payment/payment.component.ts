import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PaymentService } from '../../services/payment.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  totals: any;
  sent = false;

  paymentForm = this.fb.group({
    billing: this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,
        Validators
          .pattern('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
            '(\\".+\\"))@((\\[[0-9]{1,3}' +
            '\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')])],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
    creditCard: this.fb.group({
      cardNumber: ['', Validators.required],
      expiration: ['', Validators.required],
      ccv: ['', Validators.required]
    }),
  });

  constructor(
    private fb: FormBuilder,
    private payment: PaymentService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.payment.totals) {
      this.router.navigate(['/pre-order']);
    }
    this.totals = this.payment.totals;
  }

  onSubmit() {
    this.payment.submitPayment(this.paymentForm.value);
    this.sent = true;
  }

}
