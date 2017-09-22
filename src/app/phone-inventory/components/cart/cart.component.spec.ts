import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';
import { PhoneSelectorComponent } from '../phone-selector/phone-selector.component';
import { PhoneStockComponent } from '../../containers/phone-stock/phone-stock.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        PhoneSelectorComponent,
        PhoneStockComponent
      ],
      imports: [
        MdCardModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
