import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchWithDropdownprofileComponent } from './header-search-with-dropdownprofile.component';

describe('HeaderSearchWithDropdownprofileComponent', () => {
  let component: HeaderSearchWithDropdownprofileComponent;
  let fixture: ComponentFixture<HeaderSearchWithDropdownprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchWithDropdownprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchWithDropdownprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
