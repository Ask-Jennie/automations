import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamThreeColumnComponent } from './team-three-column.component';

describe('TeamThreeColumnComponent', () => {
  let component: TeamThreeColumnComponent;
  let fixture: ComponentFixture<TeamThreeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamThreeColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
