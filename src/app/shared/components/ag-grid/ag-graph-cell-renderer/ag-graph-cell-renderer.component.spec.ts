import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGraphCellRendererComponent } from './ag-graph-cell-renderer.component';

describe('AgGraphCellRendererComponent', () => {
  let component: AgGraphCellRendererComponent;
  let fixture: ComponentFixture<AgGraphCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGraphCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGraphCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
