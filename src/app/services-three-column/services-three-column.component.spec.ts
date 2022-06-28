import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesThreeColumnComponent } from './services-three-column.component';

describe('ServicesThreeColumnComponent', () => {
  let component: ServicesThreeColumnComponent;
  let fixture: ComponentFixture<ServicesThreeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesThreeColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
