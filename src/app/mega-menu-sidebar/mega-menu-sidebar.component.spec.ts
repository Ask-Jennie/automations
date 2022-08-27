import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMenuSidebarComponent } from './mega-menu-sidebar.component';

describe('MegaMenuSidebarComponent', () => {
  let component: MegaMenuSidebarComponent;
  let fixture: ComponentFixture<MegaMenuSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaMenuSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
