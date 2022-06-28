import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninWithImgComponent } from './signin-with-img.component';

describe('SigninWithImgComponent', () => {
  let component: SigninWithImgComponent;
  let fixture: ComponentFixture<SigninWithImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninWithImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
