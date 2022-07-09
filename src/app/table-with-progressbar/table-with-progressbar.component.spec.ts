import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithProgressbarComponent } from './table-with-progressbar.component';

describe('TableWithProgressbarComponent', () => {
  let component: TableWithProgressbarComponent;
  let fixture: ComponentFixture<TableWithProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
