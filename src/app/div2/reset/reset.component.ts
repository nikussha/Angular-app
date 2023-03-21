import { EventEmitter } from 'stream';
import { InformationService } from './../../information.service';
import { Component, OnInit, Output } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  constructor(public serv: InformationService) {}

  ngOnInit(): void {}
}
