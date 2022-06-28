import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithRightbuttonComponent } from './header-with-rightbutton.component';

describe('HeaderWithRightbuttonComponent', () => {
  let component: HeaderWithRightbuttonComponent;
  let fixture: ComponentFixture<HeaderWithRightbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithRightbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithRightbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
