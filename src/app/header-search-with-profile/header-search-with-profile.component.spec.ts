import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchWithProfileComponent } from './header-search-with-profile.component';

describe('HeaderSearchWithProfileComponent', () => {
  let component: HeaderSearchWithProfileComponent;
  let fixture: ComponentFixture<HeaderSearchWithProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchWithProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchWithProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
