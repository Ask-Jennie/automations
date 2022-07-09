import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithTagsComponent } from './table-with-tags.component';

describe('TableWithTagsComponent', () => {
  let component: TableWithTagsComponent;
  let fixture: ComponentFixture<TableWithTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
