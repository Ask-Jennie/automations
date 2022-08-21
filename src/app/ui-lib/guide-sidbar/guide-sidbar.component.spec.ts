import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSidbarComponent } from './guide-sidbar.component';

describe('GuideSidbarComponent', () => {
  let component: GuideSidbarComponent;
  let fixture: ComponentFixture<GuideSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideSidbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
