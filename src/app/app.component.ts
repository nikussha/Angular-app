import { PeoplenumComponent } from './div1/peoplenum/peoplenum.component';
import { TipsComponent } from './div1/tips/tips.component';
import { BillsComponent } from './div1/bills/bills.component';
import { InformationService } from './information.service';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('bills')
  child1!: BillsComponent;
  @ViewChild('tips')
  child2!: TipsComponent;
  @ViewChild('people')
  child3!: PeoplenumComponent;
  resetinfo() {
    this.serv.resetinf();
    this.child1.inputval.reset();
    this.child2.formval.reset();
    this.child3.numofpeople.reset();
  }
  constructor(public serv: InformationService) {}
}
