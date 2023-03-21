import { tips } from './../../enumfortips';
import { combineLatest, concatMap, map, Observable, tap } from 'rxjs';
import { InformationService } from './../../information.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-tipamount',
  templateUrl: './tipamount.component.html',
  styleUrls: ['./tipamount.component.scss'],
})
export class TipamountComponent implements OnInit {
  amount: Observable<any> = new Observable();
  ngOnInit(): void {}
  constructor(public serv: InformationService) {
    this.amount = combineLatest(
      this.serv.subjectbills$,
      this.serv.subjecttips$
    ).pipe(
      map(([num, tip]: [number, tips]) => {
        if (num) {
          return (tip / 100) * num;
        }

        return 0;
      })
    );
  }
}
