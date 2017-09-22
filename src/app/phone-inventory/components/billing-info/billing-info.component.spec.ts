import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdInputModule, MdCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { BillingInfoComponent } from './billing-info.component';
import { CartComponent } from '../cart/cart.component';
import { PhoneStockComponent } from '../../containers/phone-stock/phone-stock.component';
import { PhoneSelectorComponent } from '../phone-selector/phone-selector.component';

describe('BillingInfoComponent', () => {
  let component: BillingInfoComponent;
  let fixture: ComponentFixture<BillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BillingInfoComponent,
        CartComponent,
        PhoneSelectorComponent,
        PhoneStockComponent
      ],
      imports: [
        MdInputModule,
        MdCardModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
