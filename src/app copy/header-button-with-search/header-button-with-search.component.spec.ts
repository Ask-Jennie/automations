import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderButtonWithSearchComponent } from './header-button-with-search.component';

describe('HeaderButtonWithSearchComponent', () => {
  let component: HeaderButtonWithSearchComponent;
  let fixture: ComponentFixture<HeaderButtonWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderButtonWithSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderButtonWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
