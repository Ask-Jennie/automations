import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColourVariantsComponent } from './card-colour-variants.component';

describe('CardColourVariantsComponent', () => {
  let component: CardColourVariantsComponent;
  let fixture: ComponentFixture<CardColourVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardColourVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardColourVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
