import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PhoneInventoryModule } from './phone-inventory/phone-inventory.module';
import { PhoneInventoryRoutingModule } from './phone-inventory/phone-inventory-routing.module';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    PhoneInventoryModule,
    PhoneInventoryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
