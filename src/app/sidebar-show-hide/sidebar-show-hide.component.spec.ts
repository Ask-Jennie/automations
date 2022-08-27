import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarShowHideComponent } from './sidebar-show-hide.component';

describe('SidebarShowHideComponent', () => {
  let component: SidebarShowHideComponent;
  let fixture: ComponentFixture<SidebarShowHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarShowHideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
