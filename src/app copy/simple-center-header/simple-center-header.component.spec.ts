import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCenterHeaderComponent } from './simple-center-header.component';

describe('SimpleCenterHeaderComponent', () => {
  let component: SimpleCenterHeaderComponent;
  let fixture: ComponentFixture<SimpleCenterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCenterHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCenterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
