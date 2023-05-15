import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio2Component } from './portfolio2.component';

describe('Portfolio2Component', () => {
  let component: Portfolio2Component;
  let fixture: ComponentFixture<Portfolio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Portfolio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
