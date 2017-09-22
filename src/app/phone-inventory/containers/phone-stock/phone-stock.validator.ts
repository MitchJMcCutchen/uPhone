import { AbstractControl } from '@angular/forms';

export class StockValidators {

  static maxQuantity(control: AbstractControl) {
    const selector = control.get('selector');
    const cartItems = control.get('cart');

    if (!(selector && cartItems)) {
      return null
    };

    let quantity = 0;

    for (let i = 0; i < cartItems.value.length; i++) {
      quantity += cartItems[i].quantity;
    }

    if (quantity + selector.value.quantity > 6) {
      return { underMax: false };
    }

    return { underMax: true };

  }
}
