import { tips } from './enumfortips';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  subjectbills$ = new BehaviorSubject<number>(0);
  subjecttips$ = new BehaviorSubject<tips>(tips['5%']);
  numofpersons$ = new BehaviorSubject<number>(0);

  onchange(param: number) {
    this.subjectbills$.next(param);
    console.log(this.subjectbills$.value);
  }
  addtip(tip: number) {
    this.subjecttips$.next(tip);

    console.log(this.subjecttips$.value);
  }
  detectchange(el: HTMLInputElement) {
    this.numofpersons$.next(el.valueAsNumber);
    console.log(this.numofpersons$.value);
  }
  passval(val: number) {
    this.subjecttips$.next(val);
    console.log(this.subjecttips$.value);
  }

  resetinf() {
    this.subjectbills$.next(0);
    this.subjecttips$.next(tips['5%']);
    this.numofpersons$.next(0);
  }
  constructor() {}
}
