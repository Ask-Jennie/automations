import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWithImgComponent } from './signup-with-img.component';

describe('SignupWithImgComponent', () => {
  let component: SignupWithImgComponent;
  let fixture: ComponentFixture<SignupWithImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupWithImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
