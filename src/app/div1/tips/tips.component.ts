import { FormControl } from '@angular/forms';
import { InformationService } from './../../information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
})
export class TipsComponent implements OnInit {
  constructor(public serv: InformationService) {}

  formval: FormControl = new FormControl();
  ngOnInit(): void {}
  clickbtn(tip: number) {
    this.serv.addtip(tip);
    this.formval.reset();
  }

  passvalue() {
    this.serv.passval(this.formval.value);
  }
}
