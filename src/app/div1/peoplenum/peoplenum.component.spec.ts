import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplenumComponent } from './peoplenum.component';

describe('PeoplenumComponent', () => {
  let component: PeoplenumComponent;
  let fixture: ComponentFixture<PeoplenumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplenumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplenumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
