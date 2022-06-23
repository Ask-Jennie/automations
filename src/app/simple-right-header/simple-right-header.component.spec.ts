import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRightHeaderComponent } from './simple-right-header.component';

describe('SimpleRightHeaderComponent', () => {
  let component: SimpleRightHeaderComponent;
  let fixture: ComponentFixture<SimpleRightHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleRightHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRightHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
