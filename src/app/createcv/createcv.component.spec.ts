import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecvComponent } from './createcv.component';

describe('CreatecvComponent', () => {
  let component: CreatecvComponent;
  let fixture: ComponentFixture<CreatecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
