import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFourGridsComponent } from './card-four-grids.component';

describe('CardFourGridsComponent', () => {
  let component: CardFourGridsComponent;
  let fixture: ComponentFixture<CardFourGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFourGridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFourGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
