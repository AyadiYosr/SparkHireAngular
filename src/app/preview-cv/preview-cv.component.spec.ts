import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCvComponent } from './preview-cv.component';

describe('PreviewCvComponent', () => {
  let component: PreviewCvComponent;
  let fixture: ComponentFixture<PreviewCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
