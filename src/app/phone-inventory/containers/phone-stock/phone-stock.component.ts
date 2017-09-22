import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PaymentService } from '../../services/payment.service';
import { PhoneStockService } from '../../services/phone-stock.service';

import { Phone } from '../../models/phone.interface';

@Component({
  selector: 'app-phone-stock',
  templateUrl: './phone-stock.component.html',
  styleUrls: ['./phone-stock.component.scss']
})
export class PhoneStockComponent implements OnInit {

  phones: Phone[];

  totalQuantity: number;

  max = 6;

  form = this.fb.group({
    total: this.fb.group({
      discount: false,
      shipping: false,
      amount: 0
    }),
    selector: this.fb.array([]),
    cart: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private payment: PaymentService,
    private phoneService: PhoneStockService,
    private router: Router
  ) { }


  ngOnInit() {
    this.phoneService.getPhones()
      .subscribe(res => {
        this.phones = res;
        for (let i = 0; i < this.phones.length; i++) {
          this.addPhoneStock(this.phones[i]);
        }
      });
    this.form.get('cart')
      .valueChanges.subscribe(value => this.calculateQuantity(value));
  }

  onSubmit() {
    this.payment.totals = this.form.get('total').value;
    this.payment.cart = this.form.get('cart').value;
    this.router.navigate(['/payment']);
  }

  calculateQuantity(value) {
    const total = value.reduce((prev, next) => {
      return prev + next.quantity;
    }, 0);
    if (total >= 3) {
      this.form.get('total').get('discount').setValue(true);
    } else {
      this.form.get('total').get('discount').setValue(false);
    }
    this.phoneService.updateQuantity(total);
  }

  createStock(stock) {
    return this.fb.group({
      id: stock.id || 0,
      name: stock.name || '',
      price: stock.price || 0,
      quantity: stock.quantity || 0
    });
  }

  addPhoneStock(stock) {
    const control = this.form.get('selector') as FormArray;
    control.push(this.createStock(stock));
  }

  addPhoneToCart(phone) {
    const control = this.form.get('cart') as FormArray;
    const phoneExists = control.value.some((cartItem) => {
      if (cartItem.id === phone.id) {
        return true;
      }
    });
    if (!phoneExists) {
      control.push(this.createStock(phone));
      return;
    }
    this.updatePhoneInCart(phone);
  }

  updatePhoneInCart(phone) {
    const control = this.form.get('cart').value as FormArray;
    for (let i = 0; i < control.length; i++) {
      if (control[i].id === phone.id) {
        const quantity = control[i].quantity + phone.quantity;
        this.form.get('cart').get('0').get('quantity').setValue(quantity);
        this.calculateQuantity(this.form.get('cart').value);
        return;
      }
    }
  }

  removePhoneFromCart(index) {
    const control = this.form.get('cart') as FormArray;
    control.removeAt(index);
  }

}
