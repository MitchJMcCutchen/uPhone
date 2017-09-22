import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Phone } from '../models/phone.interface';

@Injectable()
export class PhoneStockService {

  private _quantity = new Subject<number>();

  get quantity(): Observable<number> {
    return this._quantity;
  }

  updateQuantity(number: number) {
    this._quantity.next(number);
  }

  getPhones(): Observable<Phone[]> {
    return this.http
      .get('/api/phones')
      .map(res => res.json());
  }

  constructor(private http: Http) { }


}
