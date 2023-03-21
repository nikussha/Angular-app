import { InformationService } from './../../information.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent implements OnInit {
  numofpeople$: Observable<number> = new Observable();

  constructor(public serv: InformationService) {
    this.numofpeople$ = combineLatest(
      serv.numofpersons$,
      serv.subjectbills$
    ).pipe(
      map(([pers, bill]: [number, number]) => {
        if (!pers) {
          return 0;
        }
        return bill / pers;
      })
    );
  }
  ngOnInit(): void {}
}
