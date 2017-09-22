import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCardModule } from '@angular/material';

import { ConfirmationComponent } from './confirmation.component';

import { PaymentService } from '../../services/payment.service';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationComponent ],
      imports: [
        MdCardModule
      ],
      providers: [
        PaymentService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
