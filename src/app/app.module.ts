import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './div1/bills/bills.component';
import { TipsComponent } from './div1/tips/tips.component';
import { PeoplenumComponent } from './div1/peoplenum/peoplenum.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TipamountComponent } from './div2/tipamount/tipamount.component';
import { TotalComponent } from './div2/total/total.component';
import { ResetComponent } from './div2/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    TipsComponent,
    PeoplenumComponent,
    TipamountComponent,
    TotalComponent,
    ResetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
