import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdInputModule, MdCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from '../cart/cart.component';
import { CreditCardComponent } from './credit-card.component';
import { PhoneSelectorComponent } from '../phone-selector/phone-selector.component';
import { PhoneStockComponent } from '../../containers/phone-stock/phone-stock.component';

describe('CreditCardComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        CreditCardComponent,
        PhoneSelectorComponent,
        PhoneStockComponent
      ],
      imports: [
        MdCardModule,
        MdInputModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
