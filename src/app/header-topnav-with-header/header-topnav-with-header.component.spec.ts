import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopnavWithHeaderComponent } from './header-topnav-with-header.component';

describe('HeaderTopnavWithHeaderComponent', () => {
  let component: HeaderTopnavWithHeaderComponent;
  let fixture: ComponentFixture<HeaderTopnavWithHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTopnavWithHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopnavWithHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
