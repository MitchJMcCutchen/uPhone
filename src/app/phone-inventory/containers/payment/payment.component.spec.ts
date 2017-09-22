import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BillingInfoComponent } from '../../components/billing-info/billing-info.component';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';
import { CreditCardComponent } from '../../components/credit-card/credit-card.component';
import { PaymentComponent } from './payment.component';

import { PaymentService } from '../../services/payment.service';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BillingInfoComponent,
        ConfirmationComponent,
        CreditCardComponent,
        PaymentComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MdCardModule,
        MdInputModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        PaymentService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
