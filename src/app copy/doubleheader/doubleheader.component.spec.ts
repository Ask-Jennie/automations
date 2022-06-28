import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleheaderComponent } from './doubleheader.component';

describe('DoubleheaderComponent', () => {
  let component: DoubleheaderComponent;
  let fixture: ComponentFixture<DoubleheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
