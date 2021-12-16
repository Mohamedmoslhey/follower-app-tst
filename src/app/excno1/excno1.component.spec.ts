import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excno1Component } from './excno1.component';

describe('Excno1Component', () => {
  let component: Excno1Component;
  let fixture: ComponentFixture<Excno1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excno1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Excno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
