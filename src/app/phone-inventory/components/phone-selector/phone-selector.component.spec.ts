import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from '../cart/cart.component';
import { PhoneSelectorComponent } from './phone-selector.component';
import { PhoneStockComponent } from '../../containers/phone-stock/phone-stock.component';

import { PhoneStockService } from '../../services/phone-stock.service';

describe('PhoneSelectorComponent', () => {
  let component: PhoneSelectorComponent;
  let fixture: ComponentFixture<PhoneSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        PhoneSelectorComponent,
        PhoneStockComponent
      ],
      imports: [
        HttpModule,
        MdCardModule,
        ReactiveFormsModule
      ],
      providers: [
        PhoneStockService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
