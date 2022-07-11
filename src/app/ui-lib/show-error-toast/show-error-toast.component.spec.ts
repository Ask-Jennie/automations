import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorToastComponent } from './show-error-toast.component';

describe('ShowErrorToastComponent', () => {
  let component: ShowErrorToastComponent;
  let fixture: ComponentFixture<ShowErrorToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowErrorToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowErrorToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
