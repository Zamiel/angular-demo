import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableErrorsComponent } from './table-errors.component';

describe('TableErrorsComponent', () => {
  let component: TableErrorsComponent;
  let fixture: ComponentFixture<TableErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableErrorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
