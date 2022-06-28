import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSixGridComponent } from './portfolio-six-grid.component';

describe('PortfolioSixGridComponent', () => {
  let component: PortfolioSixGridComponent;
  let fixture: ComponentFixture<PortfolioSixGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSixGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSixGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
