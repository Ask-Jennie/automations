import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThreeVariantsComponent } from './card-three-variants.component';

describe('CardThreeVariantsComponent', () => {
  let component: CardThreeVariantsComponent;
  let fixture: ComponentFixture<CardThreeVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardThreeVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardThreeVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
