import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Phone } from '../../models/phone.interface';

import { PhoneStockService } from '../../services/phone-stock.service';

@Component({
  selector: 'app-phone-selector',
  templateUrl: './phone-selector.component.html',
  styleUrls: ['./phone-selector.component.scss']
})
export class PhoneSelectorComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  index: number;

  @Input()
  phone: Phone;

  @Output()
  added: EventEmitter<any> = new EventEmitter<any>();

  max = 6;

  constructor(private phoneService: PhoneStockService) { }

  ngOnInit() {
    this.phoneService.quantity.subscribe(quantity => this.max = 6 - quantity);
  }

  addPhone() {
    if (this.parent.get('selector').get(`${this.index}`).get('quantity').value > this.max) {
      this.parent.get('selector').get(`${this.index}`).get('quantity').setErrors({ 'overMax': true });
      return null;
    }
    this.added.emit(this.parent.get('selector').get(`${this.index}`).value);
    this.parent.get('selector').get(`${this.index}`).get('quantity').reset(0);
  }

}
