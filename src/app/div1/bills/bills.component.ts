import { InformationService } from './../../information.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  constructor(public serv: InformationService) {}
  inputval = new FormControl();

  ngOnInit(): void {}
  detectchange(e: Event) {
    let target = e.target as HTMLInputElement;
    this.serv.onchange(target.valueAsNumber);
  }
}
