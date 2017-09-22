import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MdCardModule, MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CartComponent } from '../../components/cart/cart.component';
import { PhoneSelectorComponent } from '../../components/phone-selector/phone-selector.component';
import { PhoneStockComponent } from './phone-stock.component'

import { PaymentService } from '../../services/payment.service';
import { PhoneStockService } from '../../services/phone-stock.service';

describe('PhoneStockComponent', () => {
  let component: PhoneStockComponent;
  let fixture: ComponentFixture<PhoneStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        PhoneSelectorComponent,
        PhoneStockComponent,
      ],
      imports: [
        HttpModule,
        MdCardModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        PaymentService,
        PhoneStockService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
