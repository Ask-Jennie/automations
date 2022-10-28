import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloginComponent } from './glogin.component';

describe('GloginComponent', () => {
  let component: GloginComponent;
  let fixture: ComponentFixture<GloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
