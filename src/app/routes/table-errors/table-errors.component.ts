import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { finalize, Observable } from 'rxjs';

import { ErrorsApiService } from '@routes/table-errors/apis/errors-api.service';
import { ErrorDependencies, ErrorResponse } from '@routes/table-errors/models/errors-api.model';
import { AgGraphCellRendererComponent } from '@shared/components/ag-grid/ag-graph-cell-renderer/ag-graph-cell-renderer.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const cellStyle = { display: 'flex', alignItems: 'center' };

@Component({
  selector: 'app-table-errors',
  imports: [
    AgGridAngular,
    AgGridModule,
    AsyncPipe,
  ],
  templateUrl: './table-errors.component.html',
  styleUrl: './table-errors.component.scss'
})
export class TableErrorsComponent implements OnInit {

  protected columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', flex: 1, cellStyle },
    { headerName: 'Count', field: 'count', flex: 1, cellRenderer: AgGraphCellRendererComponent },
    {
      headerName: 'Status',
      field: 'statusId',
      flex: 1,
      cellRenderer: ({ value }: { value: string }) => this.statusDependencies(value),
      cellStyle
    },
    {
      headerName: 'Priority',
      field: 'priorityId',
      flex: 1,
      cellRenderer: ({ value }: { value: string }) => this.priorityDependencies(value),
      cellStyle
    }
  ];

  protected dependencies?: ErrorDependencies;
  protected isLoading: boolean = true;
  protected rowData$?: Observable<ErrorResponse[]>;

  private destroyRef$: DestroyRef = inject(DestroyRef);
  private errorsApi: ErrorsApiService = inject(ErrorsApiService);

  ngOnInit() {
    this.rowData$ = this.errorsApi.getList().pipe(finalize(() => this.isLoading = false));

    this.errorsApi.getDependencies()
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe((dependencies) => {
        this.dependencies = dependencies;
      });
  }

  private priorityDependencies(key: string): string {
    return this.dependencies?.priorities ? this.dependencies.priorities[key] : key;
  }

  private statusDependencies(key: string): string {
    return this.dependencies?.status ? this.dependencies.status[key] : key;
  }
}
