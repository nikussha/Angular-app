import { InformationService } from './../../information.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoplenum',
  templateUrl: './peoplenum.component.html',
  styleUrls: ['./peoplenum.component.scss'],
})
export class PeoplenumComponent implements OnInit {
  constructor(public serv: InformationService) {}

  ngOnInit(): void {}
  numofpeople: FormControl = new FormControl();
  detectchange(e: Event) {
    let target = e.target as HTMLInputElement;
    this.serv.detectchange(target);
  }
}
