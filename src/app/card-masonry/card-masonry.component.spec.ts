import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMasonryComponent } from './card-masonry.component';

describe('CardMasonryComponent', () => {
  let component: CardMasonryComponent;
  let fixture: ComponentFixture<CardMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMasonryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
