import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipamountComponent } from './tipamount.component';

describe('TipamountComponent', () => {
  let component: TipamountComponent;
  let fixture: ComponentFixture<TipamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
