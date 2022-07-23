import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageVariantsComponent } from './card-image-variants.component';

describe('CardImageVariantsComponent', () => {
  let component: CardImageVariantsComponent;
  let fixture: ComponentFixture<CardImageVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImageVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImageVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
