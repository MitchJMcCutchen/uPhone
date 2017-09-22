import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  subtotal: number;

  get phones() {
    return (this.parent.get('cart') as FormArray ).value;
  }

  get total() {
    return (this.parent.get('total').get('amount').value);
  }

  get discount() {
    return (this.parent.get('total').get('discount').value);
  }

  get shipping() {
    return (this.parent.get('total').get('shipping').value);
  }

  constructor() { }

  ngOnInit() {
    this.parent.get('cart')
      .valueChanges.subscribe(value => {
        const shipping = value.some((stock) => {
          return stock.name === 'Glass';
        });
        if (shipping) {
          this.parent.get('total').get('shipping').setValue(true);
        } else {
          this.parent.get('total').get('shipping').setValue(false);
        }
        this.calculateTotal(value);
      });
  }

  calculateTotal(value) {
    let total = value.reduce((prev, next) => {
      return prev + (next.quantity * next.price);
    }, 0);
    this.subtotal = total;
    if (this.discount) {
      total = total - (total / 10);
    }
    if (this.shipping) {
      total = total + 100;
    }
    this.parent.get('total').get('amount').setValue(total);
  }

  onRemove(index) {
    this.remove.emit(index);
  }

}
